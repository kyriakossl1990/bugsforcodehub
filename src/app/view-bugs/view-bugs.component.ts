import { Component, OnInit } from '@angular/core';
import { Bug, BugsServicesService } from '../services/bugs-services.service';

@Component({
  selector: 'app-view-bugs',
  templateUrl: './view-bugs.component.html',
  styleUrls: ['./view-bugs.component.css']
})
export class ViewBugsComponent implements OnInit {

  bugs: Bug[] = []

  constructor(private bugService: BugsServicesService) { }

  ngOnInit(): void {

    //this.bugService.getBugs()


    const bug = new Bug();
    bug.title = "dsadsa";
    bug.description = "dsadsadsad";
    bug.priority = "dsadsadsad";
    bug.reporter = "dsadsadsad";
    bug.dateCreated = new Date();
    bug.status = "dsadsadsad";

    this.bugs.push(bug)

  }

}
