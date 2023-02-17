import { Injectable } from '@angular/core';
import { S3Adapter } from 'src/app/shared/adapters/s3-adapter';
import { IExperience } from 'src/app/shared/interfaces/experience-interface';



@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experiencesList: IExperience[] = []

  constructor(service: S3Adapter) { 
    this.experiencesList = service.getExperiences();
  }

  get experiences(): IExperience[] {

    console.log(this.experiencesList);
    return this.experiencesList;
  }

}
