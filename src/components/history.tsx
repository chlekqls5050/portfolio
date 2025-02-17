'use client';
import { historyData } from '@/data/data';
import style from './history.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function History() {
    const historyRef = useRef<HTMLDivElement>(null);
    const listRefs = useRef<(HTMLLIElement | null)[]>([]);
    const lineRef = useRef<(HTMLSpanElement)>(null);
    useEffect(() => {
      if (!historyRef.current) return;

      // ScrollTrigger.create({
      //   trigger: historyRef.current,
      //   start: "10% top",
      //   end: "+=500",
      //   pin: true,
      //   scrub: .5,
      // });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: historyRef.current,
          start: "10% top",
          end: "+=1000",
          pin: true,
          scrub: .5,
        }
      });
      tl.to(lineRef.current,
        { width: '100%',
          duration: 3,
          stagger: 0,
          scrollTrigger: {
            // trigger: historyRef.current,
            start: "top top",                
            toggleActions: "play none play none"
          },
         }
      );
      listRefs.current.forEach((el, i) => {
        tl.fromTo(
            el,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              delay: i * 1,
              scrollTrigger: {
                // trigger: historyRef.current,
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
                  <div className={style.history_bg}>
                    <p className={style.text_ani}>history</p>
                    <p className={style.text}>history</p>
                  </div>
                
                  <span className={style.line} ref={lineRef}></span>
                  <ul>
                      {
                          historyData.map((history, i) => (
                              <li key={i} ref={(el: HTMLLIElement | null) => {listRefs.current[i] = el;}}>
                                  <p className={style.date}>{history.date}</p>
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