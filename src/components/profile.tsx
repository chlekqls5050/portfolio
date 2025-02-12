import Image from "next/image";
import style from './profile.module.css';
import Link from "next/link";

export default function Profile() {
    return (
        <div className='main_content_wr' id="main_profile_wrap">
			<div className="w-1280">
				<div className='main_title_wrap'>
					<p className='main_title'><span>profile</span></p>
					<p className='main_title_bg'><span>profile</span></p>
				</div>
				<div className={style.profile_cont_wrap}>
                    <div className={style.profile_bg}>
                        <p>Profile</p>
                    </div>
                    <div className={style.profile_left_wrap}>
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
                            </ul>
                        </div>
                    </div>
                    <div className={style.profile_right_wrap}>
                        <div className={style.profile_title_wrap}>
                            <h3>
                                <span>끊임없이 배우고 노력하는 개발자</span> 최다빈 입니다.
                            </h3>
                        </div>
                        
                        <div className={style.profile_text_wrap}>
                            <p>
                                퍼블리셔로 일하며 웹의 구조와 디자인을 다루는 경험을 쌓았습니다. <br className="hidden768"/>
                                하지만 점점 더 동적인 웹 서비스와 사용자 경험을 개선하는 것에 흥미를 느끼게 되었고, <br className="hidden768"/>
                                프론트엔드 개발에 대한 관심이 커졌습니다. <br className="hidden768"/>
                                그래서 독학으로 TypeScript와 React, Next.js 등을 공부하며 개발 역량을 키워왔습니다. <br className="hidden768"/>
                                퍼블리셔로서 일했던 경험을 바탕으로, UI/UX를 고려한 섬세한 개발을 할 수 있도록 끊임없이 배우고 성장하고 있습니다.
                            </p>
                        </div>
                    </div>
				</div>
				{/* <div className='more_btn_wr'>					
				  <Link href="./profile.html" className='more_btn'>
					<span>
                        view more
                        <span className="icon_wrap">
                            <Image src="/images/icon/icon_more_btn.png" alt='바로가기 화살표' fill />
                        </span>
                    </span>
				  </Link>
				</div> */}
			</div>
		</div>
    )
}