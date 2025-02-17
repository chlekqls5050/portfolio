import Image from "next/image";
import style from "./page.module.css";
import Visual from "@/components/visual";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import History from "@/components/history";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className={style.container}>
      <Visual title={`dabeen's portfolio`} />
      <Profile />
      <Skill />
      <History />
      <Portfolio />
    </div>
  );
}
