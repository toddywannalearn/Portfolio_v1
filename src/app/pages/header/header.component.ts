import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    github: string = 'https://github.com/toddywannalearn';
    linkedin: string = 'https://www.linkedin.com/in/douglas-costa-462030115/';

    constructor() {}

    openGithub() {
        window.open(this.github);
    }

    openLinkedin() {
        window.open(this.linkedin);
    }
}
