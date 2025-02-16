"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import style from "./cursor.module.css";

export default function MouseCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.3,
          left: e.pageX - 10,
          top: e.pageY - 10,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className={style.mouse_cursor}></div>;
}
