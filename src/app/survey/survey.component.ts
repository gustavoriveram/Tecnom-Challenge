import { Component, inject, signal } from '@angular/core';
import { ExperienceFormComponent } from "./components/experience-form/experience-form.component";
import { Router } from '@angular/router';

@Component({
  imports: [ExperienceFormComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export default class SurveyComponent {

  router = inject(Router);
  showMessageView = signal(false);

  handleFormSubmit(){
    this.showMessageView.set(true);
    setTimeout(() => {
      // Redirects to home page
      this.router.navigate(['/']);
      this.showMessageView.set(false);
    }, 3000);
  }
}
