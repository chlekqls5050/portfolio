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