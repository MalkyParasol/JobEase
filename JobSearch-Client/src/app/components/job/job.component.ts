import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { jobFields } from '../../models/fields';
import { Areas } from '../../models/areas';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  
  @Input()job:Job | undefined;
  jobField = jobFields
  jobArea = Areas
}
