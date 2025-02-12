import Link from 'next/link';
import style from './header.module.css';
export default function Header() {
    return (
        <header className={style.header}>
            <div className="w-1280">
                <div className={style.hd_logo_wrap}>
                    <Link href={'/'}>D</Link>
                </div>
                <nav className={style.hd_menu_wrap}>
                    <ul>
                        <li className={style.hd_menu_list}>
                            <Link href={''}>profile</Link>
                        </li>
                        <li className={style.hd_menu_list}>
                            <Link href={''}>portfolio</Link>
                        </li>
                        <li className={style.hd_menu_list}>
                            <Link href={''}>contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}