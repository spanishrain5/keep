import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes-service';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-add-note',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css'
})
export class AddNote {
  public title:String = "";
  public content:String = "";

  constructor(
    private notesService:NotesService,
  ) {}

  public addNote() {
    var note: Note = {
      title: this.title,
      content: this.content
    };

    this.notesService.addNote(note);

    this.title = "";
    this.content = "";
  }
}
