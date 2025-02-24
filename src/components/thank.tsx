'use client';
import style from './thank.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Thank() {
    const thanktRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    
    const mm = gsap.matchMedia();

    useEffect(() => {
        if (!thanktRef.current) return;
        mm.add("(min-width: 768px)", () => {
            gsap.fromTo(textRef.current,
                { clipPath: "polygon(-200% 0, 50% 100%, 0 100%, 0% 0%)", },
                {
                    clipPath: "polygon(100% 0, 110% 100%, 0 100%, 0% 0%)",
                    scrollTrigger: {
                        trigger: thanktRef.current,
                        start: "-50% top",    
                    },
                }
            );
        });
        mm.add("(max-width: 768px)", () => {
            gsap.fromTo(textRef.current,
                { clipPath: "polygon(-200% 0, 50% 100%, 0 100%, 0% 0%)", },
                {
                    clipPath: "polygon(100% 0, 110% 100%, 0 100%, 0% 0%)",
                    scrollTrigger: {
                        trigger: thanktRef.current,
                        start: "-100% top",    
                    },
                }
            );
        });
    }, [mm]);

    return (
        <div className="main_content_wr" id="main_thank_wr" ref={thanktRef}>
            <div className={style.thank_cont_wrap}>
                <div className={style.title_wrap}>
                    <p className={style.title} ref={textRef}>thank you</p>
                </div>
            </div>
        </div>
    )
}