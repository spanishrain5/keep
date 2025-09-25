import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes-service';
import { Note } from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-note',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css'
})
export class AddNote {
  public title:String = "";
  public content:String = "";
  // public notes:Note[] = [];

  constructor(
    private notesService:NotesService,
    private http:HttpClient
  ) {
    // this.notes = notesService.notes;
  }

  public addNote() {
    // var note: Note = {
    //   id: ,
    //   title: this.title,
    //   content: this.content
    // };

    this.notesService.addNote(this.title, this.content).subscribe(() => {
      this.title = "";
      this.content = "";
      this.notesService.loadNotes();
    });
    // this.notes.push(note);

    // this.title = "";
    // this.content = "";

    // this.http.post(
    //   "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes.json", 
    //   note
    // ).subscribe(() => {});
  }
}
