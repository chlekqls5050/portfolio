'use client'
import { useState, useEffect } from "react";
import style from "./visual.module.css";

export default function Visual({title}:{title:string}) {
    const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < title.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + title.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, title]);
  
    return (
        <div className={style.visual_wrap}>
            <div className={style.visual_inner_box}>
            <div className={style.visual_content_wrap}>
                <div className={style.title_wrap}>
                <h2 className={style.title}>
                    <span>{typedText}</span>
                    <span className={style.cursor}></span>
                </h2>
                </div>
            </div>
            <div className={style.visual_bg}>
                <span className={`${style.visual_bg_ball} ${style.visual_bg_ball01}`}></span>
                <span className={`${style.visual_bg_ball} ${style.visual_bg_ball02}`}></span>
            </div>
            </div>
        </div>
    )
}