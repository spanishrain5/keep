import { Component } from '@angular/core';
import { Note } from '../../models/Note';
import { NotesService } from '../../services/notes-service';

@Component({
  selector: 'app-count-notes',
  imports: [],
  templateUrl: './count-notes.html',
  styleUrl: './count-notes.css'
})
export class CountNotes {
  public notes:Note[] = [];

  constructor (private notesService:NotesService) {
    this.notesService.onNoteListChange.subscribe(() => {
      this.notes = notesService.notes;
    });
    // this.notes = notesService.notes;
  }

}
