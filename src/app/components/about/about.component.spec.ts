import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Componente rates', () => {
let component: AboutComponent;
let fixture: ComponentFixture<AboutComponent>;

beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            AboutComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
});

it("Debe crear el componente", () => {
    expect(component).toBeDefined();
});

it("Debe bindear correctamente el text", () => {
component.text = "SARASA LA SASA";
fixture.detectChanges();
const compiled = fixture.debugElement.nativeElement;
expect(compiled.querySelector(".lead").textContent).toBe("SARASA LA SASA");
});



});