import { EventEmitter, Injectable } from '@angular/core';
import { Note } from '../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes:Note[]=[];

  public onNoteListChange = new EventEmitter;

  constructor(private http:HttpClient){
    this.loadNotes();
  }

  public loadNotes() {
    return this.http.get<{[key:string]:Note}>(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes.json"
    )
  }

  public loadNote(id:String) {
    return this.http.get<Note>(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes/"
      +id+".json"
    );
  }

  public addNote(title:String, content:String) {
    return this.http.post(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes.json", 
      {
        title: title,
        content: content
      }
    ) 
  }

  public updateNote(note:Note) {
    return this.http.patch(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes/"
      +note.id+".json",
      note
    )
  }

  public deleteNote(id:String) {
    return this.http.delete(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes/"+id+".json" 
    );
  }

  public emitChange() {
    this.onNoteListChange.emit();
  }
   
}
