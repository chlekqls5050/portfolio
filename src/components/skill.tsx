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
                            <p className={style.title}>html</p>
                            <p className={style.text}>웹 표준 및 웹 접근성 고려 / 크로스 브라우징</p>
                        </li>
                        <li>
                            <p className={style.title}>css</p>
                            <p className={style.text}>PC, Mobile 레이아웃 구현 / 미디어쿼리, 반응형 작업 / Transition, Animation 활용</p>
                        </li>
                        <li>
                            <p className={style.title}>JS</p>
                            <p className={style.text}>자바스크립트 / 제이쿼리 / 오픈 소스 활용 및 수정</p>
                        </li>
                        <li>
                            <p className={style.title}>design</p>
                            <p className={style.text}>
                                Adobe Photoshop, Adobe XD
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}