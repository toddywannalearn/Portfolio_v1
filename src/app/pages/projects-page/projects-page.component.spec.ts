import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsPageComponent } from './projects-page.component';

describe('ProjectsPageComponent', () => {
    let component: ProjectsPageComponent;
    let fixture: ComponentFixture<ProjectsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsPageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
