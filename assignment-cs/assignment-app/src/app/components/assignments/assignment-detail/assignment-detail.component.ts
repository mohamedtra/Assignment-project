import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from 'src/app/model/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignementTransmis:Assignment;

  constructor(private assignmentsService:AssignmentsService,
              private route:ActivatedRoute,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    // l'id passé par l'URL est de type string et nous on veut
    // un number. On peut utiliser l'astuce suivante : rajouter un "+" devant
    // la chaine, ce qui va la transformer en number
    let id = +this.route.snapshot.params.id;
    console.log("detail : id récupéré dans URL = " + id);
    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        this.assignementTransmis = a;
      });
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignementTransmis)
    .subscribe(message => {
      console.log(message);
      this.assignementTransmis = null;
      this.router.navigate(["/home"]);
    });
  }

  onAssignementRendu() {
    this.assignementTransmis.rendu = true;
    this.assignmentsService.updateAssignment(this.assignementTransmis)
      .subscribe(message => {
        console.log("assignment mis à jour");
        this.router.navigate(["/home"]);
      });
  }

  onClickEdit() {
    this.router.navigate(
                    ['assignment', this.assignementTransmis.id, 'edit'],
                    {
                      queryParams:{
                        nom:this.assignementTransmis.nom
                      },
                        fragment:'edition'
                      });
  }

  loggedIn() {
    return this.authService.loggedIn;
  }
}
