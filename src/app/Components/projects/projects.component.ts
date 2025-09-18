import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Inductotherm Customer Management System',
      description: 'Developed a full-fledged Angular front-end for customer management, with dynamic routing, charts, and session security.',
      tech: ['Angular 17', 'RxJS', 'Bootstrap 5', 'ngx-bootstrap'],
      link: 'https://inductotherm.in'
    },
    {
      title: 'Catalyst Document Tracker',
      description: 'Designed a real-time document tracking portal with role-based access and powerful form validations.',
      tech: ['Angular Material', 'TypeScript', 'Responsive Layout'],
      link: 'https://catalysttrustee.com'
    },
    {
      title: 'Attendance App (in Progress)',
      description: 'Cross-platform Ionic app built with Angular + Capacitor, features include chart analytics, QR attendance, and offline sync.',
      tech: ['Ionic', 'Capacitor', 'Angular', 'Bootstrap'],
      link: ''
    }
  ];
}
