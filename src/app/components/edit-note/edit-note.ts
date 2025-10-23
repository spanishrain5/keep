import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  imports: [FormsModule],
  templateUrl: './edit-note.html',
  styleUrl: './edit-note.css'
})
export class EditNote {
  public title:String = "";
  public content:String = "";
  public id:String = "";

  constructor (private notesService:NotesService, private route:ActivatedRoute, private router:Router) {
    this.id = this.route.snapshot.params["id"];
    this.notesService.loadNote(this.id).subscribe((data) => {
      this.title = data.title;
      this.content = data.content;
    });
  }

  public updateNote() {
    this.notesService.updateNote({
      id: this.id,
      title: this.title,
      content: this.content
    }).subscribe(() => {
      this.notesService.loadNotes();
      this.router.navigate(['/']);
    })
  }
}
