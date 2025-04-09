import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  aboutCards = [
    {
      icon: 'fas fa-code',
      text: 'Efficient Angular Developer with strong expertise in TypeScript, HTML and CSS, creating dynamic and responsive web apps.'
    },
    {
      icon: 'fas fa-plug',
      text: 'Proven ability to work with RESTful APIs, RxJS, and Angular CLI to deliver robust and scalable solutions.'
    },
    {
      icon: 'fas fa-search',
      text: 'Known for a methodical approach to coding, ensuring minimal errors and high-quality results.'
    },
    {
      icon: 'fas fa-users',
      text: 'Dependable team player with solid work ethics, ready to contribute skills and knowledge as Angular Developer.'
    }
  ];

}
