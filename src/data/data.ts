export interface HistoryData {
    date: string;
    company: string;
    job: string;
  }
  
  export interface SkillData {
    name: string;
    icon: string;
  }
  
  export interface SkillCategory {
    category: string;
    skills: SkillData[];
  }
  export const historyData: HistoryData[] = [
    {
      date: '2017. 10 ~ 2019. 10',
      company: '모바일 의류 쇼핑몰 더옷장',
      job: '웹 디자이너',
    },
    {
      date: '2020. 08 ~ 2023. 04',
      company: '웹 에이전시 플랜에이',
      job: '웹 퍼블리셔',
    },
    {
      date: '2023. 09 ~ 2024. 10',
      company: '트라이업',
      job: '웹 퍼블리셔',
    },
  ];
  
  export const skillsData: SkillCategory[] = [
    {
      category: "Language",
      skills: [
        { name: "HTML5", icon: "/images/icon/icon_skill_html.png" },
        { name: "CSS", icon: "/images/icon/icon_skill_css.png" },
        { name: "Javascript", icon: "/images/icon/icon_skill_js.png" },
        { name: "Typescript", icon: "/images/icon/icon_skill_ts.png" },
      ],
    },
    {
      category: "FrontEnd",
      skills: [
        { name: "React", icon: "/images/icon/icon_skill_react.png" },
        { name: "NextJS", icon: "/images/icon/icon_skill_next.png" },
      ],
    },
    {
      category: "Design",
      skills: [
        { name: "Photoshop", icon: "/images/icon/icon_skill_ps.png" },
        { name: "XD", icon: "/images/icon/icon_skill_xd.png" },
      ],
    },
    {
      category: "ETC",
      skills: [
        { name: "Git", icon: "/images/icon/icon_skill_github.png" },
        { name: "Figma", icon: "/images/icon/icon_skill_figma.png" },
        { name: "Notion", icon: "/images/icon/icon_skill_notion.png" },
        { name: "Vercel", icon: "/images/icon/icon_skill_vercel.png" },
      ],
    },
  ];
  