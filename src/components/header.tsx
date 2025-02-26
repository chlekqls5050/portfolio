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
                            <Link href={'https://strong-breadfruit-a4a.notion.site/Project-Summary-1a600fb6a084804fbb84d13797ae40d7'} target='_blank'>Notion</Link>
                        </li>
                        <li className={style.hd_menu_list}>
                            <Link href={'https://github.com/chlekqls5050'} target='_blank'>github</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}