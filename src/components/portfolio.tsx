'use client';
import { PortfolioData } from '@/data/data';
import style from './portfolio.module.css';
import Image from "next/image";
import Link from 'next/link';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    const listRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
      if (!listRefs.current) return;

      listRefs.current.forEach((el) => {
        gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              scrollTrigger: {
                trigger: el,
                start: "-=40% top",                
                toggleActions: "play none play none"
              },
            }
          );
        });
    }, []);
    return (
        <div className='main_content_wr' id="main_portfolio_wrap">
            <div className="w-1280">
                <div className='main_title_wrap'>
                    <p className='main_title'><span>portfolio</span></p>
                    <p className='main_title_bg'><span>portfolio</span></p>
                </div>
                <div className={style.portfolio_cont_wrap}>
                  <ul className={style.portfolio_category_list}>
                      {PortfolioData.map((categoryData, i) => (
                          <li key={i} ref={(el: HTMLLIElement | null) => {listRefs.current[i] = el;}}>
                              <p className={style.title}>{categoryData.company}</p>
                              <ul className={style.portfolio_list}>
                                  {categoryData.portfolioList.map((portfolio, j) => (
                                  <li key={j}>
                                      <div className={style.image_wrap}>
                                          <Image src={portfolio.images} alt={`${portfolio.images} 아이콘`} fill />
                                      </div>
                                      <div className={style.text_wrap}>
                                          <div className={style.text_inbox}>
                                              <p className={style.list_title}>{portfolio.title}</p>
                                              <p className={style.description}>{portfolio.description}</p>
                                              <p className={style.engagement}>참여도 : {portfolio.engagement}</p>
                                              {portfolio.personnel ? <p className={style.personnel}>참여인원 : {portfolio.personnel}</p> : ""}
                                              <p className={style.skill}>{portfolio.skill}</p>
                                              <Link className={style.link} href={portfolio.link} target='_blank'>사이트 바로가기</Link>
                                          </div>
                                      </div>
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