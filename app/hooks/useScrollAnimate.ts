'use client';
import { useEffect, RefObject } from 'react';

export default function useScrollAnimate(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Also observe children with .scroll-animate class
    const children = el.parentElement
      ? el.parentElement.querySelectorAll('.scroll-animate')
      : [];

    el.classList.add('scroll-animate');
    observer.observe(el);

    children.forEach((child) => {
      if (!child.classList.contains('visible')) {
        observer.observe(child);
      }
    });

    return () => observer.disconnect();
  }, [ref]);
}
