import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'survey-experience-form',
  imports: [ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent {

  onFormSubmit = output();

  formGroup = new FormGroup({
    experienceScore: new FormControl('', Validators.required),
    experienceDetail: new FormControl(''),
  })

  handleSubmit(){
    if(this.formGroup.invalid) return;
    this.onFormSubmit.emit();
  }
}
