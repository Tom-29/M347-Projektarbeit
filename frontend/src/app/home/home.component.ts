import { Component } from '@angular/core';
import {NoteService} from "../note.service";
import {NgForOf, NgIf} from "@angular/common";
import {Note} from "../Note";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes
    });
  }
}
