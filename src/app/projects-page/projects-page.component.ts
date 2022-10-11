
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IRepository, ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements AfterViewInit {


  repositories: IRepository[] = [
    {
      title: 'Portfolio v1',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      pretium dui sapien, quis iaculis purus fermentum porttitor. Nam nec
      augue sit amet enim ullamcorper semper. Etiam at nunc at est feugiat
      iaculis id sed mi. Etiam at nunc at est feugiat iaculis id sed mi.`,
      imgPath: './assets/img/portfolio_cover.png',
      repoLink: 'https://github.com/toddywannalearn/Portfolio_v1',
      tags: ['HTML','CSS','Angular','Typescrypt','Figma']
    },
    {
      title: 'Portfolio v2',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      pretium dui sapien, quis iaculis purus fermentum porttitor. Nam nec
      augue sit amet enim ullamcorper semper. Etiam at nunc at est feugiat
      iaculis id sed mi. Etiam at nunc at est feugiat iaculis id sed mi.`,
      imgPath: './assets/img/portfolio_cover.png',
      repoLink: 'https://github.com/toddywannalearn/Portfolio_v1',
      tags: ['HTML','CSS','Angular','Typescrypt','Figma']
    },
    {
      title: 'Portfolio v3',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      pretium dui sapien, quis iaculis purus fermentum porttitor. Nam nec
      augue sit amet enim ullamcorper semper. Etiam at nunc at est feugiat
      iaculis id sed mi. Etiam at nunc at est feugiat iaculis id sed mi.`,
      imgPath: './assets/img/portfolio_cover.png',
      repoLink: 'https://github.com/toddywannalearn/Portfolio_v1',
      tags: ['HTML','CSS','Angular','Typescrypt','Figma']
    }
  ]

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngAfterViewInit(): void {
    this.projectsService.setList(this.repositories);
    console.log(this.repositories);
  }


  

}
