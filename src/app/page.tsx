import Image from "next/image";
import style from "./page.module.css";
import Visual from "@/components/visual";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import History from "@/components/history";
import Portfolio from "@/components/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <Visual />
      <Profile />
      <Skill />
      <History />
      <Portfolio />
      <div className='main_content_wr' id="main_contact_wrap">
        <div className="w-1280">
            <div className='main_title_wrap'>
                <p className='main_title'><span>contact</span></p>
                <p className='main_title_bg'><span>contact</span></p>
            </div>
            <div className={style.contact_cont_wrap}>
              <ul className={style.contact_ul}>
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
    </div>
  );
}
