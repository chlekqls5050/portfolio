import Image from 'next/image';
import style from './skill.module.css';
export default function Skill() {
    return (
        <div className='main_content_wr' id="main_skill_wrap">
			<div className="w-1280">
				<div className='main_title_wrap'>
					<p className='main_title'><span>skill</span></p>
					<p className='main_title_bg'><span>skill</span></p>
				</div>
                <div className={style.profile_skill_wrap}>
                    <ul className={style.profile_skill_list}>
                        <li>
                            <p className={style.title}>Language</p>
                            <ul className={style.skill_category_list}>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_html.png'} alt="html 아이콘" fill />
                                    </div>
                                    <p>HTML5</p>                                    
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_css.png'} alt="css 아이콘" fill />
                                    </div>
                                    <p>CSS</p>           
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_js.png'} alt="Javacript 아이콘" fill />
                                    </div>
                                    <p>Javacript</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_ts.png'} alt="Typecript 아이콘" fill />
                                    </div>
                                    <p>Typecript</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className={style.title}>FrontEnd</p>
                            <ul className={style.skill_category_list}>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_react.png'} alt="React 아이콘" fill />
                                    </div>
                                    <p>React</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_next.png'} alt="NextJS 아이콘" fill />
                                    </div>
                                    <p>NextJS</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className={style.title}>Design</p>
                            <ul className={style.skill_category_list}>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_ps.png'} alt="Photoshop 아이콘" fill />
                                    </div>
                                    <p>Photoshop</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_xd.png'} alt="XD 아이콘" fill />
                                    </div>
                                    <p>XD</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className={style.title}>ETC</p>
                            <ul className={style.skill_category_list}>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_github.png'} alt="Git 아이콘" fill />
                                    </div>
                                    <p>Git</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_figma.png'} alt="Figma 아이콘" fill />
                                    </div>
                                    <p>Figma</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_notion.png'} alt="Notion 아이콘" fill />
                                    </div>
                                    <p>Notion</p>
                                </li>
                                <li>
                                    <div className={style.icon_wrap}>
                                        <Image src={'/images/icon/icon_skill_vercel.png'} alt="Vercel 아이콘" fill />
                                    </div>
                                    <p>Vercel</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}