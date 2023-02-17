import { IExperience } from 'src/app/shared/interfaces/experience-interface';


import { Injectable } from '@angular/core';
import { getDatabase, onValue, Query, query, ref } from 'firebase/database';
import { ExperiencesService } from 'src/app/pages/experiences-page/experiences.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private db = getDatabase();
  private experiencesRef: Query = query(ref(this.db, 'experiences/'));
  
  constructor(
    private experiencesService: ExperiencesService
  ) {}

  get payload(): any {
    return onValue(this.experiencesRef, (snapshot) => {
      const data = snapshot.val();
      const obj = data as IExperience;
      
      console.log(data);
      console.log(obj);
    }, (error)=> {
      console.log(error);
    });
  }
}
