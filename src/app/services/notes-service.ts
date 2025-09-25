import { Injectable } from '@angular/core';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes:Note[]=[];

  constructor(){
    let tmp = localStorage.getItem("notes");

    if (tmp != null){
      this.notes = JSON.parse(tmp);
    }
  }

  private saveList() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  public addNote(note:Note) {
    this.notes.push(note);
    this.saveList();
  }

  public deleteNote(i:number) {
    this.notes.splice(i, 1);
    this.saveList();
  }
   
}
