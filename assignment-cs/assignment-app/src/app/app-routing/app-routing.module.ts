import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignementComponent } from '../components/assignments/add-assignement/add-assignement.component';
import { AssignmentDetailComponent } from '../components/assignments/assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from '../components/assignments/assignments.component';
import { LoginComponent } from '../components/assignments/authentication/login/login.component';
import { EditAssignmentComponent } from '../components/assignments/edit-assigment/edit-assignment.component';
import { RegisterComponent } from '../components/assignments/register/register/register.component';

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
    path:"login",
    component:LoginComponent
  },

  {
    path:"register",
    component:RegisterComponent
  },

  {
    path:"add",
    component:AddAssignementComponent
  },
  {
    path:"assignments/:id",
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
