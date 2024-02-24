import { Component } from '@angular/core';
import {NoteService} from "../note.service";
import {Router} from "@angular/router";
import {Note} from "../Note";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  title?: string;
  text?: string;

  constructor(private noteService: NoteService, private router: Router) { }

  onSubmit(): void {
    if (this.title && this.text) {
      const newNote: Note = { id: null, title: this.title, text: this.text };
      this.noteService.postNote(newNote).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
}}
