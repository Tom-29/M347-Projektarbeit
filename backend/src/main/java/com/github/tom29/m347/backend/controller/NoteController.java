package com.github.tom29.m347.backend.controller;

import com.github.tom29.m347.backend.model.Note;
import com.github.tom29.m347.backend.service.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1")
@CrossOrigin
public class NoteController {

    private NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/note/{id}")
    public Note getNote(@PathVariable("id") Long id) {
        return noteService.getNote(id);
    }

    @GetMapping("/notes")
    public List<Note> getNotes() {
        return noteService.getNotes();
    }

    @PostMapping("/note")
    public void postNode(@RequestBody Note note) {
        noteService.postNote(note);
    }
}
