import Image from "next/image";
import style from "./page.module.css";
import Visual from "@/components/visual";

export default function Home() {
  return (
    <div className={style.container}>
      <Visual title={`dabeen's portfolio`}/>
    </div>
  );
}
