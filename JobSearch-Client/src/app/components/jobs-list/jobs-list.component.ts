import { Component, Input, OnInit, input } from '@angular/core';
import { jobFields } from '../../models/fields';
import { JobsListService } from '../../services/jobs-list.service';
import { Job } from '../../models/job';
import { NavigationEnd, Router } from '@angular/router';
import { Areas } from '../../models/areas';

import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'enumLabels' })
// export class EnumLabelsPipe implements PipeTransform {
//   transform(value: any): string[] {
//     return Object.values(value);
//   }
// }

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent implements OnInit {

  @Input() jobField: jobFields | undefined;

  jobFieldEnum = jobFields;

  jobsList: Job[] = [];

  filterByFieldOn:boolean = false;

  filterByAreaOn:boolean = false;

  FieldFilter : jobFields | null = null;

  AreaFilter : Areas | null = null;

  

  constructor(private router: Router, private jobsListService: JobsListService) {}

  

  ngOnInit() {
    this.jobsListService.getJobs().subscribe((jobs) => (this.jobsList = jobs));
    if (this.jobField == undefined) {
      this.router.navigate(['jobs']);
    } else {
      this.router.navigate(['jobs/filter']);
    }
  }
  
  transform(value: any): string[] {
    return Object.values(value);
  }

  ActivateAreaFilter(){
    this.filterByAreaOn = true;
  }

  ActivateFieldFilter(){
    this.filterByFieldOn = true;
  }

}
