export interface IExperience {
  startDate: string;
  endDate: string;
  company: string;
  jobTitle: string;
  jobDescription: string;
  mainActivies: string[];
  companyLogo: string;
}

export interface IExperienceTarget {
  getExperiences(): IExperience[];
}
