'use client';
import { PortfolioData } from '@/data/data';
import style from './portfolio.module.css';
import Image from "next/image";
import Link from 'next/link';

import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    const listRefs = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    
    const [activeCompany, setActiveCompany] = useState(PortfolioData[0].company);
    const selectedPortfolio = PortfolioData.find((item) => item.company === activeCompany)?.portfolioList;
    const handleTabClick = (company: string) => {
        setActiveCompany(company);
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(0);
        }
    }, [activeCompany]);

    
    useEffect(() => {
        if (!listRefs.current) return;
        gsap.fromTo(listRefs.current,
            { opacity: 0, y: 150, },
            {
                opacity: 1,
                y: 0, 
                scrollTrigger: {
                    trigger: listRefs.current,
                    start: "-20% top",    
                    end: "+=500",            
                    toggleActions: "play none play none"
                },
            }
        );
    }, []);


    const swiperOptions = {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        onSwiper: (swiper: SwiperType) => {
            swiperRef.current = swiper;
        },
    };


    return (
        <div className='main_content_wr' id="main_portfolio_wrap" ref={listRefs}>
            <div className="w-1280">
                <div className='main_title_wrap'>
                    <p className='main_title'><span>portfolio</span></p>
                    <p className='main_title_bg'><span>portfolio</span></p>
                </div>
                <div className={style.portfolio_cont_wrap}>
                    <div className={style.category_btn_wrap}>
                        {PortfolioData.map((portfolioBtn) => (
                        <button key={portfolioBtn.company}
                        onClick={() => handleTabClick(portfolioBtn.company)} 
                        className={ portfolioBtn.company === activeCompany ? style.active : ""}>
                            {portfolioBtn.company}
                        </button>
                        ))}
                    </div>

                    {selectedPortfolio && (
                    <div className={style.swiper_list_wrap}>
                        <div className="swiper_navigation">
                            <button className="custom_prev">
                                <Image src="/images/icon/icon_swiper_arrow.png" alt="" fill />
                            </button>
                            <button className="custom_next">
                                <Image src="/images/icon/icon_swiper_arrow.png" alt="" fill />
                            </button>
                        </div>
                        <div className={style.portfolio_category_list}>
                            <Swiper {...swiperOptions} modules={[Autoplay, Pagination, Navigation]}>
                                {selectedPortfolio.map((item) => (
                                    <SwiperSlide key={item.title}>
                                        <div className={style.portfolio_list}>
                                            <div className={style.image_wrap}>
                                                <Image src={item.images} alt={item.title} fill />
                                            </div>
                                            <div className={style.text_wrap}>
                                                <div className={style.text_inbox}>
                                                    {item.title && <h3 className={style.list_title}>{item.title}</h3>}
                                                    {item.description && <p className={style.description}>{item.description}</p>}
                                                    {item.skill && <p className={style.skill}>Skill: {item.skill}</p>}
                                                    {item.personnel && <p className={style.personnel}>참여인원 : {item.personnel}</p>}
                                                    {item.engagement && <p className={style.engagement}>참여도 : {item.engagement}</p>}
                                                    <Link href={item.link} className={style.link} target="_blank" rel="noopener noreferrer">사이트 바로가기</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}