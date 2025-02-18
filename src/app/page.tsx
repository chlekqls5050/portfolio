import style from "./page.module.css";
import Visual from "@/components/visual";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import History from "@/components/history";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Thank from "@/components/thank";

export default function Home() {
  return (
    <div className={style.container}>
      <Visual />
      <Profile />
      <Skill />
      <History />
      <Portfolio />
      <Contact />
      <Thank />
    </div>
  );
}
