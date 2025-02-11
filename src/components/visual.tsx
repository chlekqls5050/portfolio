import style from "./visual.module.css";

export default function Visual({title}:{title:string}) {
    return (
        <div className={style.visual_wrap}>
            <div className={style.visual_inner_box}>
            <div className={style.visual_content_wrap}>
                <div className={style.title_wrap}>
                <h2 className={style.title}>
                    <span>{title}</span>
                </h2>
                </div>
            </div>
            <div className={style.visual_bg}>
                <span className={`${style.visual_bg_ball} ${style.visual_bg_ball01}`}></span>
                <span className={`${style.visual_bg_ball} ${style.visual_bg_ball02}`}></span>
            </div>
            </div>
        </div>
    )
}