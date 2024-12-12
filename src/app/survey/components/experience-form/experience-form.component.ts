import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'survey-experience-form',
  imports: [ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent {

  formGroup = new FormGroup({
    experienceScore: new FormControl('', Validators.required),
    experienceDetail: new FormControl(''),
  })
}
