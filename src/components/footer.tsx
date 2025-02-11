import Link from 'next/link'
import style from './footer.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="w-1400">
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
                    <p className={style.copyright_text}>copyright ©2023 Dabeen. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}