import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Note} from "../Note";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  note: Note | null = null

  constructor(private route: ActivatedRoute, private noteService: NoteService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadNote(Number(id))
  }

  loadNote(id: number): void {
    this.noteService.getNote(id).subscribe(note => {
      this.note = note
    });
  }
}
