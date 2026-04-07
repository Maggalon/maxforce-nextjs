'use client';

import { useEffect, useState, useCallback } from 'react';

interface WeatherData {
  temp: number;
  weatherId: number;
  description: string;
}

type WeatherCategory = 'frost' | 'rain' | 'fog' | 'cool' | 'sunny';

function categorizeWeather(data: WeatherData): WeatherCategory {
  const { temp, weatherId } = data;

  // Rain: thunderstorms (2xx), drizzle (3xx), rain (5xx)
  if (weatherId >= 200 && weatherId < 400) return 'rain';
  if (weatherId >= 500 && weatherId < 600) return 'rain';

  // Fog/mist/haze (7xx)
  if (weatherId >= 700 && weatherId < 800) return 'fog';

  // Frost: 0°C or below
  if (temp <= 0) return 'frost';

  // Cool: 1–15°C
  if (temp > 0 && temp <= 15) return 'cool';

  // Nice/sunny: above 15°C
  return 'sunny';
}

function getWeatherEmoji(category: WeatherCategory): string {
  switch (category) {
    case 'frost': return '🥶';
    case 'rain': return '🌧️';
    case 'fog': return '🌫️';
    case 'cool': return '🌤️';
    case 'sunny': return '☀️';
  }
}

function getWeatherMessage(category: WeatherCategory, temp: number): string {
  const roundedTemp = Math.round(temp);
  switch (category) {
    case 'frost':
      return `Сегодня во Владивостоке морозно: ${roundedTemp}°C. Самое время хорошенько попотеть в теплом зале. Но тепло обязательно придет, и тогда мы пойдем отрываться на улицу!`;
    case 'rain':
      return 'За окном дождь и типичная приморская непогода. Пережидаем стихию в зале и готовим форму к солнечным дням!';
    case 'fog':
      return 'Город снова накрыло густым туманом. Тренируемся под крышей и ждем, когда выглянет солнце, чтобы вырваться под открытое небо.';
    case 'cool':
      return `На улице бодрящие ${roundedTemp}°C. Пока греемся и ставим рекорды внутри зала, но уже совсем скоро открываем сезон уличных мероприятий!`;
    case 'sunny':
      return `На улице отличная погода: ${roundedTemp}°C и солнце! Никаких отговорок — выходим из зала и проводим время на свежем воздухе.`;
  }
}

function getWeatherGradient(category: WeatherCategory): string {
  switch (category) {
    case 'frost':
      return 'linear-gradient(135deg, #1a2a4a 0%, #2d3a5c 50%, #1a2a4a 100%)';
    case 'rain':
      return 'linear-gradient(135deg, #1a2530 0%, #2a3540 50%, #1a2530 100%)';
    case 'fog':
      return 'linear-gradient(135deg, #2a2a2e 0%, #3a3a3e 50%, #2a2a2e 100%)';
    case 'cool':
      return 'linear-gradient(135deg, #1a2030 0%, #2a3545 50%, #1a2030 100%)';
    case 'sunny':
      return 'linear-gradient(135deg, #2a1a08 0%, #3a2a12 50%, #2a1a08 100%)';
  }
}

function getAccentColor(category: WeatherCategory): string {
  switch (category) {
    case 'frost': return '#60a5fa';
    case 'rain': return '#6ea8d7';
    case 'fog': return '#a0a0a8';
    case 'cool': return '#f59e0b';
    case 'sunny': return '#fbbf24';
  }
}

const POPUP_STORAGE_KEY = 'maxforce_weather_popup_dismissed';
const DISMISS_HOURS = 12;

export default function WeatherPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      try {
        localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
      } catch { }
    }, 400);
  }, []);

  useEffect(() => {
    // Check if already dismissed recently
    try {
      const dismissed = localStorage.getItem(POPUP_STORAGE_KEY);
      if (dismissed) {
        const hours = (Date.now() - parseInt(dismissed)) / (1000 * 60 * 60);
        if (hours < DISMISS_HOURS) return;
      }
    } catch { }

    // Fetch weather
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Vladivostok&units=metric&appid=e13a8a8ce4dbc22b9e3e58528bc197e9`
        );
        if (!res.ok) return;
        const data = await res.json();
        setWeather({
          temp: data.main.temp,
          weatherId: data.weather[0].id,
          description: data.weather[0].description,
        });
      } catch (e) {
        // Silently fail — don't show popup if API fails
        console.log(e);

      }
    };

    fetchWeather();
  }, []);

  // Show popup after 10 seconds, only if weather data loaded
  useEffect(() => {
    if (!weather) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [weather]);

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible, dismiss]);

  if (!visible || !weather) return null;

  const category = categorizeWeather(weather);
  const emoji = getWeatherEmoji(category);
  const message = getWeatherMessage(category, weather.temp);
  const gradient = getWeatherGradient(category);
  const accent = getAccentColor(category);

  return (
    <div
      className={`weather-popup-overlay ${closing ? 'weather-popup-closing' : ''}`}
      onClick={dismiss}
    >
      <div
        className={`weather-popup ${closing ? 'weather-popup-exit' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Погода во Владивостоке"
      >
        {/* Close button */}
        <button
          className="weather-popup-close"
          onClick={dismiss}
          aria-label="Закрыть"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Weather visual header */}
        <div
          className="weather-popup-header"
          style={{ background: gradient }}
        >
          <div className="weather-popup-emoji">{emoji}</div>
          <div className="weather-popup-temp" style={{ color: accent }}>
            {Math.round(weather.temp)}°C
          </div>
          <div className="weather-popup-city">Владивосток</div>
        </div>

        {/* Content */}
        <div className="weather-popup-body">
          <p className="weather-popup-message">{message}</p>
          <a href="/outdoor" className="weather-popup-link" onClick={dismiss}>
            наши мероприятия на открытом воздухе →
          </a>
        </div>
      </div>
    </div>
  );
}
