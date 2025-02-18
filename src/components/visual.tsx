'use client';
import style from './visual-two.module.css';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VisualTwo() {
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!visualRef.current) return;

      const $el = [
        visualRef.current.querySelector('[data-id="visualBigBox"]'),
        visualRef.current.querySelector('[data-id="visualBigFirst"]'),
        visualRef.current.querySelector('[data-id="visualBigLast"]'),
        visualRef.current.querySelector('[data-id="visualSmallBox"]'),
        visualRef.current.querySelector('[data-id="visualSmallFirst"]'),
        visualRef.current.querySelector('[data-id="visualSmallLast"]'),
      ];
      const [visualBigBox, visualBigFirst, visualBigLast, visualSmallBox, visualSmallFirst, visualSmallLast] = $el;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top top",
          end: "+=1000",
        //   end: "bottom bottom",
          pin: true,
          scrub: .5,
        },
      });
      tl.to(visualBigFirst,
        { x: -150,}
      );
      tl.to(visualBigLast,
        { x: 150,}
      );
      tl.to(visualBigBox,
        { opacity: 0,}
      );
      tl.to(visualSmallBox,
        { opacity: 1,}
      );
      tl.to(visualSmallFirst,
        { x: -150,}
      );
      tl.to(visualSmallLast,
        { x: 150,}
      );

    }, []);

    return (
        <div className={style.visual_wrap} ref={visualRef}>
            <div className={style.text_wrap}>
                <div className={`${style.big_text_box} ${style.text_box}`} data-id="visualBigBox">
                    <p className={style.big_text} data-id="visualBigFirst">Hello, I'm</p>
                    <p className={style.big_text} data-id="visualBigLast">DaBeen</p>
                </div>
                <div className={`${style.small_text_box} ${style.text_box}`} data-id="visualSmallBox">
                    <p className={style.small_text} data-id="visualSmallFirst">Frontend</p>
                    <p className={style.small_text} data-id="visualSmallLast">Developer</p>
                </div>
            </div>
            <div className={style.arrow_down}>
                <Image src={'/images/icon/icon_arrow_down.png'} alt={'아래 화살표 아이콘'} fill />
            </div>
        </div>
    )
}