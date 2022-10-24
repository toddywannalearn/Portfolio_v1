import { Injectable } from '@angular/core';


export interface IExperience {
  startMonth: string,
  endMonth: string,
  company: string,
  jobTitle: string,
  jobDescription: string,
  mainActivies: string[],
  companyLogo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiencesList: IExperience[] = []

  constructor() { }


  setExperiences (experiences: IExperience[]) {
    this.experiencesList = experiences;
  }

  get experiences (): IExperience[] {
    return this.experiences;
  }
}
