import Image from "next/image";
import style from './profile.module.css';
import Link from "next/link";

export default function Profile() {
    return (
        <div className={style.main_content_wr} id="main_profile_wrap">
			<div className="w-1400">
				<div className={style.title_wrap}>
					<p className={style.title} data-scroll><span>profile</span></p>
				</div>
				<div className={style.profile_cont_wrap}>
					<div className={style.profile_img_wrap}>
						<div className={style.inbox}>
							<Image src="/images/dabeen_profile_img.jpg" fill alt="profile img" />                           
						</div>
					</div>
                    <div className={style.profile_infor_wrap}>
                        <ul className={style.profile_infor_list}>
                            <li>
                                <p className={style.title}>name</p>
                                <p className={style.text}>최다빈</p>
                            </li>
                            <li>
                                <p className={style.title}>birth date</p>
                                <p className={style.text}>1997.12.10</p>
                            </li>
                            <li>
                                <p className={style.title}>address</p>
                                <p className={style.text}>서울시 중랑구 중화동</p>
                            </li>
                            <li>
                                <p className={style.title}>e-mail</p>
                                <p className={style.text}>chlekqls5050@naver.com</p>
                            </li>
                            <li>
                                <p className={style.title}>Git</p>
                                <p className={style.text}>https://github.com/chlekqls5050</p>
                            </li>
                        </ul>
                    </div>
				</div>
				<div className={style.more_btn_wrap}>					
				  <Link href="./profile.html" className={style.more_btn}>
					<span>view more 
                        {/* <Image src="./images/icon_more_btn.png" alt='' fill> */}
                    </span>
				  </Link>
				</div>

                
                <div className={style.profile_skill_wrap} style={{display:'none'}}>
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