import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  github: string = 'https://github.com/toddywannalearn';
  linkedin: string = 'https://www.linkedin.com/in/douglas-costa-462030115/';
  
  constructor() { }

  openGithub() {
    window.open(this.github);
  }

  openLinkedin() {
    window.open(this.linkedin);
  }
}
