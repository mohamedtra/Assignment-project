import { Injectable } from '@angular/core';
import { Assignment } from '../model/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  assignments: Assignment[] = [];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  uri = 'http://localhost:8010/api/assignments';
  headers = new HttpHeaders({'x-access-token': localStorage.getItem('token')});

  getAssignments(): Observable<Assignment[]> {
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri, {headers: this.headers})
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

  addAssignment(assignment: FormData): Observable<any> {
    //this.loggingService.log(assignment, 'ajouté');
    //this.assignments.push(assignment);
    //return of("Assignement ajouté");
    return this.http.post(this.uri, assignment, {headers: this.headers});
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
