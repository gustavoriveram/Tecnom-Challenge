import { Component, inject, signal } from '@angular/core';
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";
import { Router } from '@angular/router';
import { WorkshopSurveyService } from './services/workshop-survey.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [ExperienceFormComponent, TitleCasePipe],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export default class SurveyComponent {

  router = inject(Router);
  workshopSurveyService = inject(WorkshopSurveyService);

  showMessageView = signal(false);
  
  workshopName = this.workshopSurveyService.workshopName;
  workshopAddress = this.workshopSurveyService.workshopAddress;
  workshopEmail = this.workshopSurveyService.workshopEmail;
  workshopPhone = this.workshopSurveyService.workshopPhone;

  handleFormSubmit(){
    this.showMessageView.set(true);
    setTimeout(() => {
      // Redirects to home page or some other page
      this.router.navigate(['/']);
      this.showMessageView.set(false);
    }, 3000);
  }
}
