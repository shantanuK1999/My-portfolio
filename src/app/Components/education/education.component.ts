import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationList = [
    {
      title: 'MBA IT & System Management',
      institute: 'Narsee Monjee Institute of Management Studies',
      duration: 'January 2022 - 2024'
    },
    {
      title: 'MSC Computer Science',
      institute: 'MIT World Peace University',
      duration: 'January 2020 - 2022'
    },
    {
      title: 'BSC Computer Science',
      institute: 'MIT World Peace University',
      duration: 'January 2017 - 2020'
    },
    {
      title: 'HSC ( 12th )',
      institute: 'Kaveri College of Arts Science and Commerce',
      duration: 'January 2017 - 2020'
    },
    {
      title: 'SSC ( 10th )',
      institute: 'Abhinav Vidyalaya',
      duration: 'January 2015 - 2017'
    }
  ];
}
