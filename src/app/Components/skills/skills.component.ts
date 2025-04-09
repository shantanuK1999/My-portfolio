import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false, // trigger every time you scroll
    });
  }

  tools = [
    { name: 'HTML5', icon: 'bi-filetype-html', proficiency: 100 },
    { name: 'CSS3', icon: 'bi-filetype-css', proficiency: 100 },
    { name: 'Bootstrap 5.3', icon: 'bi-bootstrap', proficiency: 100 },
    { name: 'Angular 11+', icon: 'bi-diagram-3-fill', proficiency: 100 },
    { name: 'Angular Material', icon: 'bi-layers-half', proficiency: 100 },
    { name: 'Ionic', icon: 'bi-phone', proficiency: 80 },
    { name: 'GitHub', icon: 'bi-github', proficiency: 80 },
    { name: 'SVN', icon: 'bi-folder-symlink-fill', proficiency: 100 },
    { name: 'Figma', icon: 'bi-bezier2', proficiency: 50 },
    { name: 'Postman', icon: 'bi-box-arrow-in-up-right', proficiency: 50 },
    { name: 'RxJS', icon: 'bi-arrow-repeat', proficiency: 85 },
    { name: 'DevOps', icon: 'bi-cloud-upload-fill', proficiency: 90 },
    { name: 'Azure API', icon: 'bi-cloud-check-fill', proficiency: 80 },
    { name: 'VS Code', icon: 'bi-terminal-fill', proficiency: 100 },
    { name: 'Visual Studio', icon: 'bi-laptop', proficiency: 100 },
    { name: 'Android Studio', icon: 'bi-android', proficiency: 75 },
    { name: 'Responsive Design', icon: 'bi-phone-fill', proficiency: 100 },
    { name: 'UI Design', icon: 'bi-palette-fill', proficiency: 100 },
    { name: 'Testing & Debugging', icon: 'bi-bug-fill', proficiency: 90 },
  ];


}
