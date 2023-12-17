import { Injectable } from '@angular/core';

export interface IRepository {
  title: string;
  description: string;
  imgPath: string;
  repoLink: string;
  tags: string[];
}

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    repositoriesList: IRepository[] = [];

    constructor() {}

    setList(repositories: IRepository[]) {
        this.repositoriesList = repositories;
    }

    get getlist(): IRepository[] {
        return this.repositoriesList;
    }
}

// {
//   [
//     title: "",
//     description: "",
//     imgUrl: "",
//     chips: [
//       "",
//       "",
//       "",
//       "",
//     ],
//     repoLink: "",
//   ]
// }
