import { ExperiencesService, IExperience } from './experiences.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html',
  styleUrls: ['./experiences-page.component.scss'],
})
export class ExperiencesPageComponent implements OnInit {
  experiences: IExperience[] = [
    {
      startMonth: '2022/01',
      endMonth: 'Current',
      company: 'Itaú Unibanco, São Paulo',
      jobTitle: 'Software Engineer',
      jobDescription: `Worked in the development of accessible functionalities using Angular
  11 on the mobile and web channels, attending the guidelines and
  architectural patterns, besides the analysis of productivity
  indicators and OKRs.`,
      mainActivies: [
        'Usage of components from the Material and the bank design system',
        'Git Flow',
        'Publishment and deployment through AWS pipelines',
      ],
      companyLogo: '.assetsimglogo_itau.png',
    },
    {
      startMonth: '2019/10',
      endMonth: '2021/12',
      company: 'Itaú Unibanco, São Paulo',
      jobTitle: 'Quality Engineer',
      jobDescription: `Responsable for the planning and execution of functional, automated, API and performance tests,
       ensuring the quality of deliveries since the planning and disseminating the best practices inside the team.`,
      mainActivies: [
        'Participation in Inceptions, effort calculations and business and technical refinements',
        'Incident analysis and monitoring using splunk',
        'Usage of Postman, Silk, P4all, Selenium, Appium, BDD and Cucumber',
      ],
      companyLogo: '.assetsimglogo_itau.png',
    },
    {
      startMonth: '2018/10',
      endMonth: '2019/10',
      company: 'Cognizant, São Paulo',
      jobTitle: 'Test Analyst',
      jobDescription: `Performed as QA ensuring the quality in the development cycle on mobile,
       web and mainframe platforms for financial segment customers.`,
      mainActivies: [
        'Planning, modeling and execution of tests',
        'Worked on the Scrum model',
        'Usage of Silk, Jira, Git, Selenium and Appium',
      ],
      companyLogo: '.assetsimglogo_itau.png',
    },
    {
      startMonth: '2016/05',
      endMonth: '2018/05',
      company: 'Ecolab, São Paulo',
      jobTitle: 'Back-Office Intern',
      jobDescription: `Performed as QA ensuring the quality in the development cycle on mobile,
       web and mainframe platforms for financial segment customers.`,
      mainActivies: [
        'Planning, modeling and execution of tests',
        'Worked on the Scrum model',
        'Usage of Silk, Jira, Git, Selenium and Appium',
      ],
      companyLogo: '.assetsimglogo_itau.png',
    },
  ];

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experiencesService.setExperiences(this.experiences);
  }
}
