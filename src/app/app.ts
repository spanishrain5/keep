import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNote } from "./components/add-note/add-note";
import { ListNotes } from "./components/list-notes/list-notes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddNote, ListNotes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('keep');
}
