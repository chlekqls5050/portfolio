import Image from "next/image";
import style from "./page.module.css";
import Visual from "@/components/visual";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className={style.container}>
      <Visual title={`dabeen's portfolio`} />
      <Profile />
    </div>
  );
}
