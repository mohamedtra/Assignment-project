import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignementComponent } from '../components/assignments/add-assignement/add-assignement.component';
import { AssignmentDetailComponent } from '../components/assignments/assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from '../components/assignments/assignments.component';
import { EditAssignmentComponent } from '../components/assignments/edit-assigment/edit-assignment.component';

import { AuthGuard } from '../shared/auth.guard';

const routes:Routes = [
  {
    path:"",
    component:AssignmentsComponent
  },
  {
    path:"home",
    component:AssignmentsComponent
  },
  {
    path:"add",
    component:AddAssignementComponent
  },
  {
    path:"assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path:"assignment/:id/edit",
    component:EditAssignmentComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
