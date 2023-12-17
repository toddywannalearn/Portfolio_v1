import {
    IExperience,
    IExperienceTarget,
} from '../interfaces/experience-interface';
import { FirebaseService } from '../services/firebase/firebase.service';

class FirebaseAdapter implements IExperienceTarget {
    firebase: FirebaseService;

    constructor(firebaseService: FirebaseService) {
        this.firebase = firebaseService;
    }

    getExperiences(): IExperience[] {
        return this.firebase.payload;
    }
}
