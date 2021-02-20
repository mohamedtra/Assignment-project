import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/model/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';



@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent implements OnInit {
  // form
  nomDevoir:string;
  dateRendu:Date;
  //formGroup: FormGroup
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private assignmentsService:AssignmentsService,private formBuilder: FormBuilder,
              private router:Router) { }

 
  ngOnInit(): void {
    this.initAssignmentForm();
  }

  initAssignmentForm() {
    this.firstFormGroup = this.formBuilder.group({
      titreCtrl: ['', Validators.required],
      auteurCtrl: ['', Validators.required],
      avatarCtrl: [''],
      dateDeRenduCtrl: [new Date('yyyy-mm-dd'), Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      matiereCtrl: ['', Validators.required],
      noteCtrl: ['', Validators.required],
      remarqueCtrl: ['', Validators.required],
      renduCtrl: [false, Validators.required]
    });
    
  }

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }

  /* onSubmitAssignmentForm() {
    const newAssignment = this.firstFormGroup.value;
    this.assignmentsService.addAssignment(newAssignment).
      subscribe(message => {
        console.log(message)
    })
    console.log(this.assignmentsService.assignments);
  } */

  /* onSubmit() {
    console.log("onSubmit")
    const newAssignment = this.firstFormGroup.value;
          this.secondFormGroup.value;
          newAssignment.id = Math.ceil(Math.random()*100000);


    //this.nouvelAssignment.emit(newAssignment);
    //this.assignments.push(newAssignment);
    this.assignmentsService.addAssignment(newAssignment)
    .subscribe(message => {
      console.log(message);
      //on veut re-afficher la page d'accueil avec la liste
      this.router.navigate(["/home"]);
    })
  } */

}
  