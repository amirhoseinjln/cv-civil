export type ProjectCategory = 
  | 'all' 
  | 'mums'         // دانشگاه علوم پزشکی مشهد
  | 'sistan'       // دانشگاه علوم پزشکی سیستان
  | 'contracting'  // پیمانکاری عمران تهویه بارثاوا
  | 'construction' // پروژه‌های احداث و ساختمانی
  | 'fv_design';   // پروژه‌های طراحی‌شده توسط شرکت فیوچر ویو

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: ProjectCategory;
  brandOrEntity: string;
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
  designType?: 'facade' | 'interior' | 'architectural';
  isFeatured?: boolean;
}

export interface CareerExperience {
  id: string;
  title: string;
  titleEn: string;
  organization: string;
  period: string;
  roleType: 'management' | 'supervision' | 'executive';
  isCurrent?: boolean;
  description: string;
  subLocations?: string[];
  achievements: string[];
  badge?: string;
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
