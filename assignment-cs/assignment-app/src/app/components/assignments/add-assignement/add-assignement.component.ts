import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { Assignment } from 'src/app/model/assignment.model';


/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-add-assignement',
  templateUrl: 'add-assignement.component.html',
  styleUrls: ['add-assignement.component.css']
})

export class AddAssignementComponent implements OnInit {
  nomDevoir:string;
  dateRendu:Date;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, assignmentsService:AssignmentsService, private router:Router) {}
 // constructor(private assignmentsService:AssignmentsService,
//    private router:Router) { }

  ngOnInit() {
    console.log("onSubmit")
    const newAssignment = new Assignment();

    this.firstFormGroup = this._formBuilder.group({
      titreCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      daterenduCtrl: ['', Validators.required]
    });
  }
}
