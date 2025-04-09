import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProjectsComponent,
        SkillsComponent,
        ExperienceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
