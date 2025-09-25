import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Note } from '../../models/Note';
import { NotesService } from '../../services/notes-service';

@Component({
  selector: 'app-list-notes',
  imports: [CommonModule],
  templateUrl: './list-notes.html',
  styleUrl: './list-notes.css'
})
export class ListNotes {
  public notes: Note[] = [];

  constructor(private notesService:NotesService) {
    this.notesService.onNoteListChange.subscribe(() => {
      this.notes = notesService.notes;
    });
    // this.notes = notesService.notes;
  }

  public deleteNote(i:number) {
    this.notesService.deleteNote(i);
  }
}
