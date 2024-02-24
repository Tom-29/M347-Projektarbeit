package com.github.tom29.m347.backend.service;

import com.github.tom29.m347.backend.model.Note;
import com.github.tom29.m347.backend.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteService {

    public NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }
    public Note getNote(Long id) {
        return noteRepository.getReferenceById(id);
    }

    public List<Note> getNotes() {
        return noteRepository.findAll();
    }

    public void postNote(Note note) {
        noteRepository.save(note);
    }
}
