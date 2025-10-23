import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Note } from '../../models/Note';
import { NotesService } from '../../services/notes-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-notes.html',
  styleUrl: './list-notes.css'
})
export class ListNotes {
  public notes: Note[] = [];

  constructor(private notesService:NotesService, private router:Router) {
    this.loadNotes();
  }

  public loadNotes() {
    this.notesService.loadNotes().subscribe((data) => {
      this.notes=[];
      for (let n in data){
        this.notes.push({
          id: n,
          title: data[n].title,
          content: data[n].content
        });
      }
    })
  }

  public deleteNote(id:String) {
    this.notesService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}
