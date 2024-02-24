import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Note} from "./Note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/v1'; // Basis-URL des Backend-Servers

  constructor(private http: HttpClient) { }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.baseUrl}/note/${id}`);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}/notes`);
  }

  postNote(note: Note): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/note`, note);
  }
}
