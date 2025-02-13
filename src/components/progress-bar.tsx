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
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3, // 부드러운 업데이트 (0에 가까울수록 자연스러움)
        },
      });
    }
  }, []);

  return (
    <div className={style.progress_wrap}>
      <div ref={progressRef} className={style.progress}></div>
    </div>
  );
}
