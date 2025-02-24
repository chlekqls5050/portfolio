"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from './progress-bar.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: "100%",
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom+=5300 bottom",
            scrub: 0,
        }
      });
    
    }
  }, []);

  return (
    <div className={style.progress_wrap}>
      <div ref={progressRef} className={style.progress}></div>
    </div>
  );
}
