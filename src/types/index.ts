export type ProjectCategory = 
  | 'all' 
  | 'future_view' 
  | 'healthcare' 
  | 'contracting' 
  | 'supervision';

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: ProjectCategory;
  brandOrEntity: 'FUTURE VIEW' | 'عمران تهویه بارثاوا' | 'دانشگاه علوم پزشکی مشهد' | 'دانشگاه علوم پزشکی سیستان' | 'تعاونی مسکن';
  role: string;
  employer?: string;
  year?: string;
  area?: string;
  location?: string;
  description: string;
  detailedScope?: string[];
  technicalSpecs?: {
    label: string;
    value: string;
  }[];
  structuralSystem?: string;
  isFeatured?: boolean;
}

export interface CareerExperience {
  id: string;
  title: string;
  titleEn: string;
  organization: string;
  period: string;
  roleType: 'management' | 'supervision' | 'technical';
  isCurrent?: boolean;
  description: string;
  achievements: string[];
}

export interface Certificate {
  id: string;
  title: string;
  titleEn: string;
  issuer: string;
  scope: string;
  iconName: string;
}

export interface TechnicalSkill {
  name: string;
  category: 'software' | 'engineering' | 'contracts' | 'management';
  description: string;
  proficiency: number;
}
