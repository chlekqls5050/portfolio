'use client';
import style from './history.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const historyData = [
    {
        data: '2017. 10 ~ 2019. 10',
        company: '모바일 의류 쇼핑몰 더옷장',
        job: '웹 디자이너',
    },
    {
        data: '2020. 08 ~ 2023. 04',
        company: '웹 에이전시 플랜에이',
        job: '웹 퍼블리셔',
    },
    {
        data: '2023. 09 ~ 2024. 10',
        company: '트라이업',
        job: '웹 퍼블리셔',
    }
]

export default function History() {
    const historyRef = useRef<HTMLDivElement>(null);
    const listRefs = useRef<(HTMLLIElement | null)[]>([]);
    const lineRef = useRef<(HTMLSpanElement)>(null);
    useEffect(() => {
      if (!historyRef.current) return;

      ScrollTrigger.create({
        trigger: historyRef.current,
        start: "10% top",
        end: "+=500",
        pin: true,
        scrub: .5,
      });
      gsap.to(lineRef.current,
        { width: '100%',
          duration: 3,
          scrollTrigger: {
            start: "top top",                
            toggleActions: "play none play none"
          },
         }
      );
      listRefs.current.forEach((el, i) => {
        gsap.fromTo(
            el,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: i * 1,
              scrollTrigger: {
                start: "top top",                
                toggleActions: "play none play none"
              },
            }
          );
        });
    }, []);
    return (
        <div className='main_content_wr' id="main_history_wrap" ref={historyRef}>
			<div className="w-1280">
                <div className='main_title_wrap'>
                    <p className='main_title'><span>history</span></p>
                    <p className='main_title_bg'><span>history</span></p>
                </div>
                <div className={style.history_cont_wrap}>
                    <span className={style.line} ref={lineRef}></span>
                    <ul>
                        {
                            historyData.map((history, i) => (
                                <li key={i} ref={(el: HTMLLIElement | null) => {listRefs.current[i] = el;}}>
                                    <p className={style.data}>{history.data}</p>
                                    <p className={style.company}>{history.company}</p>
                                    <p className={style.job}>{history.job}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}