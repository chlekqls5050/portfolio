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
export interface PortfolioData {
    title: string;
    images: string;
    link: string;
    description: string;
    engagement: string;
    personnel?: string;
    skill: string;
}
export interface PortfolioCompany {
    company: string;
    portfolioList: PortfolioData[];
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
  
export const PortfolioData: PortfolioCompany[] = [
    {
        company: "Crafted by Dabeen",
        portfolioList: [
            { 
                title: "모두의 여행", 
                images: "/images/portfolio/portfolio_trip.jpg", 
                link: "https://everyones-trip.vercel.app/",
                description: "사이트 신규 제작",
                engagement: "100%",
                personnel: "프론트엔드 개발자 1명",
                skill: "nextjs, TypeScript, css, supabase, vercel",
            },
            { 
                title: "dabeen portfolio", 
                images: "/images/portfolio/portfolio_dabeen.jpg", 
                link: "https://everyones-trip.vercel.app/",
                description: "사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "프론트엔드 개발자 1명",
                skill: "nextjs, TypeScript, css, vercel",
            },
        ],
    },
    {
        company: "TRIUP",
        portfolioList: [
            { 
                title: "toxnfill", 
                images: "/images/portfolio/portfolio_toxnfill.jpg", 
                link: "https://www.toxnfill.com/",
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "80 ~ 90%",
                skill: "css, JavaScript, jQuery, php",
            },
            { 
                title: "toxnfill global", 
                images: "/images/portfolio/portfolio_toxnfill_global.jpg", 
                link: "https://eng.toxnfill.com/",
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "80 ~ 90%",
                skill: "css, JavaScript, jQuery, php",
            },
            { 
                title: "toxnfill brow", 
                images: "/images/portfolio/portfolio_toxnfill_brow.jpg", 
                link: "https://www.toxnfillbrow.com/", 
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "70%",
                personnel: "퍼블리셔 2명 / 디자이너 2명",
                skill: "css, JavaScript, jQuery, php",
            },
            { 
                title: "MOTION G", 
                images: "/images/portfolio/portfolio_motionG.jpg", 
                link: "https://genesis.motionecosystem.com/login",
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "퍼블리싱 - 70%",
                personnel: "개발자 3명 / 퍼블리셔 2명 / 기획자 1명 / 디자이너 3명 ",
                skill: "css, JavaScript, jQuery, php",
            },
            { 
                title: "BBG LAB", 
                images: "/images/portfolio/portfolio_bbg.jpg", 
                link: "http://www.bbglab.co.kr/index.html",
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "80%",
                skill: "css, JavaScript, jQuery, php",
            },
        ],
    },
    {
        company: "PLAN A",
        portfolioList: [
            { 
                title: "inaba", 
                images: "/images/portfolio/portfolio_inaba.jpg", 
                link: "https://inabapetfood.co.kr/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "inaba europe", 
                images: "/images/portfolio/portfolio_inabaeurope.jpg", 
                link: "https://www.inabafoods-europe.com/", 
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "분당제일여성병원", 
                images: "/images/portfolio/portfolio_bundang.jpg", 
                link: "https://www.bundangcheil.com/", 
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "80%",
                personnel: "퍼블리셔 2명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "NETSPA", 
                images: "/images/portfolio/portfolio_netspa.jpg", 
                link: "http://netspa.co.kr/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "로열택스", 
                images: "/images/portfolio/portfolio_royaltax.jpg", 
                link: "http://royaltax.kr/",
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "wisory", 
                images: "/images/portfolio/portfolio_wisory.jpg", 
                link: "https://wisory.co.kr/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "하람가구", 
                images: "/images/portfolio/portfolio_haramgagu.jpg", 
                link: "https://haramgagu.com/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "DART", 
                images: "/images/portfolio/portfolio_dart.jpg", 
                link: "http://www.dartsharing.com/",
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "AVANT BAKERY", 
                images: "/images/portfolio/portfolio_avantbakery.jpg", 
                link: "https://avantbakery.com/", 
                description: "웹사이트 리뉴얼 / 유지보수",
                engagement: "80%",
                personnel: "퍼블리셔 2명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "JD BIOSCIENCE", 
                images: "/images/portfolio/portfolio_jdbiosci.jpg", 
                link: "http://www.jdbiosci.com/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "80%",
                personnel: "퍼블리셔 2명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "fatiabgen", 
                images: "/images/portfolio/portfolio_fatiabgen.jpg", 
                link: "http://www.fatiabgen.com/",
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "80%",
                personnel: "퍼블리셔 2명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "동진기업", 
                images: "/images/portfolio/portfolio_dongjin.jpg", 
                link: "http://www.dongjinltd.co.kr/", 
                description: "사이트 리뉴얼 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "eromnet", 
                images: "/images/portfolio/portfolio_eromnet.jpg", 
                link: "https://www.eromnet.com/", 
                description: "웹사이트 신규 제작",
                engagement: "50%",
                personnel: "퍼블리셔 2명 / 디자이너 2명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "otscience", 
                images: "/images/portfolio/portfolio_otscience.jpg", 
                link: "http://www.otscience.co.kr/",
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "공유먼트", 
                images: "/images/portfolio/portfolio_gongyoument.jpg", 
                link: "https://gongyoument.com/", 
                description: "웹사이트 신규 제작 / 유지보수",
                engagement: "100%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
            { 
                title: "FLO.DE WEDDING", 
                images: "/images/portfolio/portfolio_flodewedding.jpg", 
                link: "http://flodewedding.com/",
                description: "유지보수",
                engagement: "50%",
                personnel: "퍼블리셔 1명 / 디자이너 1명",
                skill: "그누보드, css, JavaScript, jQuery, php",
            },
        ],
    },
]