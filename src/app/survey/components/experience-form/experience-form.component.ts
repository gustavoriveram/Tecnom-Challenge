import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkshopSurveyService } from '../../services/workshop-survey.service';

@Component({
  selector: 'survey-experience-form',
  imports: [ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent {

  workshopSurveyService = inject(WorkshopSurveyService);
  onFormSubmit = output();

  question = this.workshopSurveyService.surveyQuestion;
  scoresMapping = this.workshopSurveyService.surveyMapping;

  formGroup = new FormGroup({
    experienceScore: new FormControl('', Validators.required),
    experienceDetail: new FormControl(''),
  })

  handleSubmit(){
    if(this.formGroup.invalid) return;
    this.onFormSubmit.emit();
  }
}
