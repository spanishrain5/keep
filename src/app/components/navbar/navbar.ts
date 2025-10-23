import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountNotes } from "../count-notes/count-notes";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CountNotes],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
