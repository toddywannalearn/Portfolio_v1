import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
    resume: string =
        'https://1drv.ms/b/s!Ajq9nGGWdND_gc0XAIYv-5qqzQ7S2Q?e=Wj6iuQ';

    constructor() {}

    openResume() {
        window.open(this.resume);
    }
}
