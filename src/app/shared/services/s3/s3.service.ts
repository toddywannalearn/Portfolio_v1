import { IExperience } from 'src/app/shared/interfaces/experience-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  private readonly API = 'https://douglas-myportfolio-bucket.s3.sa-east-1.amazonaws.com/';

  constructor(private http: HttpClient) { }

  get response(): any {
   return this.http.get(`${this.API}portfolio-v1-a2bab-default-rtdb-export.json`).subscribe(
    res => res as IExperience[]
   )
  }
}
