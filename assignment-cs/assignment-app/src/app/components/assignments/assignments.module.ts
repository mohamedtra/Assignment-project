import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './edit-assigment/edit-assignment.component';
import { AddAssignementComponent } from './add-assignement/add-assignement.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './register/register/register.component';



@NgModule({
  declarations: [HeaderComponent, AddAssignementComponent, AssignmentsComponent, AssignmentDetailComponent, EditAssignmentComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent,AssignmentsComponent, AddAssignementComponent, AssignmentDetailComponent, EditAssignmentComponent, LoginComponent, RegisterComponent]
})
export class AssignmentsModule { }
