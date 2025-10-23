import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes-service';
import { Note } from '../../models/Note';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private http:HttpClient,
    private router:Router
  ) {
    // this.notes = notesService.notes;
  }

  public addNote() {

    this.notesService.addNote(this.title, this.content).subscribe(() => {
      this.title = "";
      this.content = "";
      this.notesService.loadNotes();
      this.router.navigate(['/']);
    });
  
  }
}
