import { Component, OnInit } from '@angular/core';
import { Bug } from '../services/bugs-services.service';

@Component({
  selector: 'app-post-bugs',
  templateUrl: './post-bugs.component.html',
  styleUrls: ['./post-bugs.component.css']
})
export class PostBugsComponent implements OnInit {

  bug!: Bug;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {

  }
}
