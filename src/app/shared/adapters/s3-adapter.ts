import { S3Service } from './../services/s3/s3.service';
import { IExperience, IExperienceTarget } from './../interfaces/experience-interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class S3Adapter implements IExperienceTarget {

    s3Service: S3Service;

    constructor(s3Service: S3Service){
        this.s3Service = s3Service;
    }

    getExperiences(): IExperience[] {
        return this.s3Service.response;
    }
}