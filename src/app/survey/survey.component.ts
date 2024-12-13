import { Component, inject, signal } from '@angular/core';
import { ExperienceFormComponent } from './components/experience-form/experience-form.component';
import { Router } from '@angular/router';
import { WorkshopSurveyService } from './services/workshop-survey.service';
import { TitleCasePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [ExperienceFormComponent, TitleCasePipe],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss',
})
export default class SurveyComponent {
  router = inject(Router);
  workshopSurveyService = inject(WorkshopSurveyService);
  toastService = inject(ToastrService);

  showMessageView = signal(false);

  workshopName = this.workshopSurveyService.workshopName;
  workshopAddress = this.workshopSurveyService.workshopAddress;
  workshopEmail = this.workshopSurveyService.workshopEmail;
  workshopPhone = this.workshopSurveyService.workshopPhone;

  handleFormSubmit() {
    this.showMessageView.set(true);
    this.toastService.success('Comentarios enviados!', '', {
      timeOut: 6000,
      progressBar: true,
      progressAnimation: 'increasing',
    });
    setTimeout(() => {
      // Redirects to home page or some other page
      this.router.navigate(['/']);
      this.showMessageView.set(false);
    }, 6000);
  }
}
