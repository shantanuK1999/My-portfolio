import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'futuristic-portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false, // animation every time the element appears
    });
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }
}
