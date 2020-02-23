import { Component, OnInit } from '@angular/core';
import { faJava, faNodeJs, faHtml5, faCss3, faJs, faAngular, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faJava = faJava;
  faJs = faJs;
  faWordpress = faWordpress;
  faNodejs = faNodeJs;
  faCss = faCss3;
  faAngular = faAngular;
  faReact = faReact;
  faHtml = faHtml5;

  constructor() { }

  ngOnInit(): void {
  }

}
