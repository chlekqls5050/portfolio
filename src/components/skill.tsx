'use client';
import Image from 'next/image';
import style from './skill.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { skillsData } from '@/data/data';

gsap.registerPlugin(ScrollTrigger);


export default function Skill() {
    const skillRef = useRef<HTMLDivElement>(null);
    const listRefs = useRef<(HTMLLIElement | null)[]>([]);
    useEffect(() => {
      if (!skillRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef.current,
          start: "10% top",
          end: "+=700",
          pin: true,
          scrub: .5,
        },
      });
      listRefs.current.forEach((el, i) => {
        tl.fromTo(
            el,
            {
              opacity: 0,
              y: (i === 0 || i === 1) ? -100 : (i === 2 || i === 3) ? 100 : 0,
              x: (i === 0 || i === 2) ? -100 : (i === 1 || i === 3) ? 100 : 0,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scrollTrigger: {
                start: "top top",
                toggleActions: "play none play none"
              },
            }
          );
        });
    }, []);
    return (
        <div className='main_content_wr' id="main_skill_wrap" ref={skillRef}>
			    <div className="w-1280">
            <div className='main_title_wrap'>
              <p className='main_title'><span>skill</span></p>
              <p className='main_title_bg'><span>skill</span></p>
            </div>
            <div className={style.profile_skill_wrap}>
                <div className={style.skill_bg}>
                    <p>skill</p>
                </div>
                <ul className={style.profile_skill_list}>
                    {skillsData.map((categoryData, i) => (
                        <li key={i} ref={(el: HTMLLIElement | null) => {listRefs.current[i] = el;}}>
                            <p className={style.title}>{categoryData.category}</p>
                            <ul className={style.skill_category_list}>
                                {categoryData.skills.map((skill, j) => (
                                <li key={j}>
                                    <div className={style.icon_wrap}>
                                        <Image src={skill.icon} alt={`${skill.name} 아이콘`} fill />
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
    )
}