import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateAddStudentComponent } from '../template-driven/template-add-student/template-add-student.component';

@Injectable({
  providedIn: 'root'
})
export class MyCanDeactivateGuard implements CanDeactivate<TemplateAddStudentComponent> {
  canDeactivate(
    component: TemplateAddStudentComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if (component.myRef.dirty) {
      return confirm('Are you sure ?');
    }
    return true;
  }

}
