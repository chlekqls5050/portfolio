'use client'
import { useState, useEffect } from "react";
import style from "./visual.module.css";

export default function Visual({title}:{title:string}) {
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let index = 0;
        const speed = 100;
        let isMounted = true;

        function typeWriter() {
            if (index < title.length && isMounted) {
                setTypedText((prev) => prev + title.charAt(index));
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
        return () => {
            isMounted = false;
        };
    }, [title]);
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