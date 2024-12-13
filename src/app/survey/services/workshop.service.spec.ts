import { TestBed } from '@angular/core/testing';

import { WorkshopSurveyService } from './workshop-survey.service';

describe('WorkshopSurveyService', () => {
  let service: WorkshopSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
