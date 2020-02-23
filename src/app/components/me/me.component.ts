import { Component, OnInit } from '@angular/core';
import {faCoffee, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faBitbucket, faGithub, faGitlab, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter, faInstagram, faQuora, faStackOverflow, faMedium} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  faCoffee = faCoffee;
  faGithub = faGithub;
  faGitlab = faGitlab;
  faBitBucket = faBitbucket;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faStackOverflow = faStackOverflow;
  faQuora = faQuora;
  faMedium = faMedium;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
