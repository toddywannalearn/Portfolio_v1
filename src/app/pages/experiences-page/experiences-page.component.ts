
import { ExperiencesService } from './experiences.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IExperience } from 'src/app/shared/interfaces/experience-interface';


@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss'],
})
export class ExperiencesPageComponent implements OnInit {
  experiences: IExperience[] = [];

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experiences = this.experiencesService.experiences;
  }
}
