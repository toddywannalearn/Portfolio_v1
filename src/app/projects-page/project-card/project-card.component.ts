import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {


  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  imgPath: string = '';

  @Input()
  tags: string[] = [];

  @Input()
  repoLink: string = '';

  constructor() { }

  goToRepo(): void {
    window.open(this.repoLink);
  }

}
