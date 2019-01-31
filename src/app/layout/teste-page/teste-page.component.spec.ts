import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePageComponent } from './teste-page.component';

describe('TestePageComponent', () => {
    let component: TestePageComponent;
    let fixture: ComponentFixture<TestePageComponent>;

    beforeEach(
        async(() => {
            TesteBed.configureTestingModule({
                declarations: [TestePageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponentTestePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
