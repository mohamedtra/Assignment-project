import { Injectable } from '@angular/core';
import { Assignment } from '../model/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id: 1,
      titre: 'TP1 Web Components ',
      auteur: 'TRAORE MOHAMED',
      dateDeRendu: new Date('2020-11-17'),
      matiere: 'djjdjfj',
      note: '20',
      remarques: 'Excellent',
      avatar: 'jdjjdjd',
      rendu: true,
    },
    {
      id: 2,
      titre: 'TP2 Angular',
      auteur: 'Bah Mamadou Saliou',
      dateDeRendu: new Date('2020-12-13'),
      matiere: 'djjdjfj',
      note: '14',
      remarques: 'Bien',
      avatar: 'djjdjdj',
      rendu: false,
    },
    {
      id: 3,
      titre: 'Mini Projet Angular',
      auteur: 'Bourek Kamel',
      dateDeRendu: new Date('2021-01-07'),
      matiere: 'djjdjfj',
      note: '10',
      remarques: 'Passable',
      avatar: 'dsjjdjjz',
      rendu: false,
    },
  ];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  uri = 'http://localhost:8010/api/assignments';

  getAssignments(): Observable<Assignment[]> {
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri)
      .pipe(
        catchError(this.handleError<any>("getAssignments"))
      )
  }

  // Version avec promesse
  getAssignmentsPromise(): Promise<Assignment[]> {
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri).toPromise();
  }

  getAssignment(id: number): Observable<Assignment> {
    //let result = this.assignments.find(a => (a.id === id));

    //return of(result);
    return this.http.get<Assignment>(this.uri + '/' + id)
    .pipe(
      map(a => {
        a.titre += " MODIFIE DANS PIPE AVEC UN MAP";
        return a;
      }),
      tap(a => {
        console.log("Dans le tap");
        console.log(a);
      }),
      catchError(this.handleError<Assignment>(`getAssignment(id=${id})`))
    );
  }

  private handleError<T>(operation:any, result?:T) {
    return(error:any) : Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + " a échoué " + error.message);

      return of(result as T);
    }
  }

  addAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'ajouté');

    //this.assignments.push(assignment);
    //return of("Assignement ajouté");
    return this.http.post(this.uri, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'modifié');
    /*
    this.assignments.forEach((a, index) => {
      if(assignment === a) {
        this.assignments[index] = a;
      }
    });
    return of("Assignement ajouté");
    */
    return this.http.put<Assignment>(this.uri, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'supprimé');
    /*
    this.assignments.forEach((a, index) => {
      if(assignment === a) {
        this.assignments.splice(index, 1);
      }
    });

    return of("Assignement supprimé");
    */
    return this.http.delete(this.uri + '/' + assignment._id);
  }
}
