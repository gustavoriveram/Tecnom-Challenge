import { computed, inject, Injectable, signal } from '@angular/core';
import { Workshop } from '../../shared/interfaces/workshop.interface';
import { Survey } from '../interfaces/survey.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, of } from 'rxjs';
import { formatArgentinaPhoneNumber } from '../../shared/utils/phoneNumberFormatter';
import { surveyMock, workshopsMock } from '../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class WorkshopSurveyService {
  httpClient = inject(HttpClient);

  // WORKSHOP
  private workshopsUrl = `${environment.apiUrl}/places/workshops`;

  private workshopResource = rxResource({
    loader: () => {
      if (environment.production) {
        return this.httpClient
          .get<Workshop[]>(this.workshopsUrl)
          .pipe(map((res) => res.at(0)));
      } else {
        return of(workshopsMock.at(0) as Workshop);
      }
    },
  });

  workshopName = computed(() => this.workshopResource.value()?.name);
  workshopAddress = computed(
    () => this.workshopResource.value()?.formatted_address
  );
  workshopEmail = computed(() => this.workshopResource.value()?.email);
  workshopPhone = computed(() =>
    formatArgentinaPhoneNumber(this.workshopResource.value()?.phone ?? '')
  );

  // SURVEY
  private surveysUrl = `${environment.apiUrl}/boxes/config/encuesta`;

  private surveyResource = rxResource({
    loader: () => {
      if (environment.production) {
        return this.httpClient.get<Survey>(this.surveysUrl);
      } else {
        return of(surveyMock);
      }
    },
  });

  surveyQuestion = computed(() => this.surveyResource.value()?.pregunta);
  surveyMapping = computed(() => this.surveyResource.value()?.mapping);
}
