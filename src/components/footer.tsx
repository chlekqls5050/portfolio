'use client';
import Link from 'next/link';
import style from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
    const topButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <>
            <div className={style.top_btn_wrap}>
                <button onClick={topButton}>
                    <span className={style.icon_wrap}>
                        <Image src="/images/icon/icon_top_btn.png" alt="top button" fill />
                    </span>
                </button>
            </div>
            <footer className={style.footer}>
                <div className="w-1280">
                    <div className={style.ft_top_wrap}>
                        <Link href={'https://github.com/chlekqls5050'} target='_blank'>
                            <span className={style.icon_wrap}>
                                <Image src="/images/icon/icon_github.png" alt="github 아이콘" fill style={{filter:'invert(1)'}} />
                            </span>
                        </Link>
                        <Link href={'tel:010-8662-4218'}>
                            <span className={style.icon_wrap}>
                                <Image src="/images/icon/icon_phone.png" alt="전화 아이콘" fill />
                            </span>
                        </Link>
                        <Link href={'mailto:"chlekqls5050@naver.com'}>
                            <span className={style.icon_wrap}>
                                <Image src="/images/icon/icon_email.png" alt="메일 아이콘" fill />
                            </span>
                        </Link>
                    </div>
                    <div className={style.ft_bottom_wrap}>
                        <div className={style.ft_contact_wrap}>
                            <ul className={style.ft_contact_list}>
                                <li>
                                    <p className={style.title}>Phone</p>
                                    <Link href="tel:010-8662-4218" className={style.text}>010-8662-4218</Link>
                                </li>
                                <li>
                                    <p className={style.title}>E-mail</p>
                                    <Link href={'mailto:﻿"chlekqls5050@naver.com'} className={style.text}>chlekqls5050@naver.com</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={style.ft_copyright_wrap}>
                            <p className={style.copyright_text}>copyright ©2025 Dabeen. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}