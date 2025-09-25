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
    // let tmp = localStorage.getItem("notes");

    // if (tmp != null){
    //   this.notes = JSON.parse(tmp);
    // }
    this.loadNotes();
  }

  public loadNotes() {
    this.http.get<{[key:string]:Note}>(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes.json"
    ).subscribe((data) => {
      this.notes=[];
      for (let n in data){
        this.notes.push({
          id: n,
          title: data[n].title,
          content: data[n].content
        });
      }
      this.onNoteListChange.emit();
    })
  }

  private saveList() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  public addNote(title:String, content:String) {
    // this.notes.push({title: title});
    // this.saveList;
    return this.http.post(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes.json", 
      {
        title: title,
        content: content
      }
    ) 
  }

  public deleteNote(i:number) {
    // this.notes.splice(i, 1);
    // this.saveList();
    // this.onNoteListChange.emit();
    console.log("https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes/"+this.notes[i].id+".json");
    this.http.delete(
      "https://notes-ccfbf-default-rtdb.europe-west1.firebasedatabase.app/notes/"+this.notes[i].id+".json" 
    ).subscribe(() => {
      this.loadNotes();
    });
  }

  // studentsService.onNoteListChange.subscribe(() => {
  //   this.totalNotes = this.students.length;
  // })
   
}
