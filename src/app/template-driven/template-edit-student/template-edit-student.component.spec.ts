import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditStudentComponent } from './template-edit-student.component';

describe('TemplateEditStudentComponent', () => {
  let component: TemplateEditStudentComponent;
  let fixture: ComponentFixture<TemplateEditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateEditStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
