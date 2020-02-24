import { Component, OnInit } from '@angular/core';
import {textareaAutoResize} from 'materialize-css';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noteList = [];
  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  addNote(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    if (titleInput.value === '' || bodyInput.value === '') {
      alert('Insert something');
    } else {
      const newNoteList = new Note(titleInput.value, bodyInput.value);
      this.noteList.unshift(newNoteList);
      textareaAutoResize($('#bodyInput'));
    }
  }

  clearInput(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    titleInput.value = null;
    bodyInput.value = null;
  }
}

class Note {
  title: any;
  body: any;
  constructor(Title, Body) {
    this.title = Title;
    this.body = Body;
  }
}
