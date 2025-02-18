'use client';
import Image from "next/image";
import Link from "next/link";
import style from './contact.module.css';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const contactRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        if (!contactRef.current) return;
        gsap.fromTo(listRef.current,
            { opacity: 0, y: 150, },
            {
                opacity: 1,
                y: 0, 
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "-20% top",    
                    end: "+=500",            
                    toggleActions: "play none play none"
                },
            }
        );
    }, []);


    return (
      <div className='main_content_wr' id="main_contact_wrap" ref={contactRef}>
        <div className="w-1280">
            <div className='main_title_wrap'>
                <p className='main_title'><span>contact</span></p>
                <p className='main_title_bg'><span>contact</span></p>
            </div>
            <div className={style.contact_cont_wrap}>
                <div className={style.contact_bg}>
                    <p className={style.text_ani}>contact</p>
                    <p className={style.text}>contact</p>
                </div>
                <ul className={style.contact_ul} ref={listRef}>
                    <li className={style.contact_list}>
                        <div className={style.icon_wrap}>
                        <div className={style.inbox}>
                            <Image src={'/images/icon/icon_phone.png'} alt="" fill />
                        </div>
                        </div>
                        <div className={style.text_wrap}>
                        <p className={style.title}>Phone</p>
                        <Link href="tel:010-8662-4218" className={style.text}>010-8662-4218</Link>
                        </div>
                    </li>
                    <li className={style.contact_list}>
                        <div className={style.icon_wrap}>
                        <div className={style.inbox}>
                            <Image src={'/images/icon/icon_email.png'} alt="" fill />
                        </div>
                        </div>
                        <div className={style.text_wrap}>
                        <p className={style.title}>E-mail</p>
                        <Link href="#" className={style.text}>chlekqls5050@naver.com</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}