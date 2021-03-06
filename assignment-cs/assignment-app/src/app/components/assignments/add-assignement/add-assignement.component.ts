import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/model/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';



@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent implements OnInit {
  newAssignment : Assignment;
  nomDevoir:string;
  dateRendu:Date;
  //formGroup: FormGroup
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //  imageData: string;
  constructor(private assignmentsService:AssignmentsService,private formBuilder: FormBuilder,
              private router:Router) { }

 
  ngOnInit(): void {
    this.initAssignmentForm();
    
  }


  initAssignmentForm() {
    this.firstFormGroup = this.formBuilder.group({
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      avatar: [''],
      dateDeRendu: [new Date('yyyy-mm-dd'), Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      matiere: ['', Validators.required],
      note: ['', Validators.required],
      remarque: ['', Validators.required],
      rendu: [false, Validators.required]
    });
    
  }

  
  
  form1(){
    this.newAssignment = this.firstFormGroup.value;
  }

  form2(){
    this.newAssignment = {...this.newAssignment, ...this.secondFormGroup.value};
  }

 /*  onSubmitAssignmentForm() {
    
    console.log("ass global", this.newAssignment);
    this.assignmentsService.addAssignment(this.newAssignment).
      subscribe(message => {
        console.log(" yes  ",message)
    })
    console.log(this.assignmentsService.assignments);
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    
  } */

  uploadedFiles:any = null
  fileChange(element) {
      this.uploadedFiles = element.target.files;
      console.log("files" , element)
    }
    onSubmitAssignmentForm() {
      let formData = new FormData();
      formData.append("avatar", this.uploadedFiles[0],  this.uploadedFiles[0].name);
      formData.append("titre", this.newAssignment.titre);
      formData.append("auteur", this.newAssignment.auteur);
      formData.append("note", this.newAssignment.note);
      formData.append("remarques", this.newAssignment.remarques);
      formData.append("dateDeRendu", this.newAssignment.dateDeRendu.toString());
      //formData.append("remarques", Boolean.toString(this.newAssignment.rendu))
      console.log("Data ", this.newAssignment);
      console.log(formData.get("avatar"));
      this.assignmentsService.addAssignment(formData).subscribe(
        message => {
        console.log(" yes  ",message)
    })
     
    }


}
  