import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/model/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments 2 !"
  formVisible = false;
  assignments:Assignment[];
  assignmentSelectionne:Assignment;

  
  constructor(private assignmentsService:AssignmentsService, private router: Router) { }

  ngOnInit(): void {

    //this.assignments = this.assignmentsService.getAssignments();
    this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        // exécuté que quand les données sont réellement disponible
        this.assignments = assignments;
      });
     /*
     this.assignmentsService.getAssignmentsPromise()
     .then(assignments => {
        this.assignments = assignments;
     });
     */
  }
  

  assignmentClique(assignment) {
    this.assignmentSelectionne = assignment;
    this.router.navigate(["/assignments", assignment._id])
  }
/*
  onNouvelAssignment(event:Assignment) {
    //this.assignments.push(event);
    this.assignmentsService.addAssignment(event)
    .subscribe(message => {
      console.log("message");
      this.formVisible = false; // on veut voir la liste avec le nouvel assignment
    })
  }
  */
}
