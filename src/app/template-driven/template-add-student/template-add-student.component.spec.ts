import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAddStudentComponent } from './template-add-student.component';

describe('TemplateAddStudentComponent', () => {
  let component: TemplateAddStudentComponent;
  let fixture: ComponentFixture<TemplateAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
