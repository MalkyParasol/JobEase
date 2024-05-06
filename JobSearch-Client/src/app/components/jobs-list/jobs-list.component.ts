import { Component, Input, NgIterable, OnInit, input } from '@angular/core';
import { jobFields } from '../../models/fields';
import { JobsListService } from '../../services/jobs-list.service';
import { Job } from '../../models/job';
import { NavigationEnd, Router } from '@angular/router';
import { Areas } from '../../models/areas';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent implements OnInit {

  @Input() userField: jobFields | undefined; 

  jobFieldEnum = jobFields ;

  jobAreaEnum = Areas;
  
  jobsList: Job[] = [];

  FieldFilter : Number[] = [];

  AreaFilter : Number[] = [];

  jobSubmited : {name:string,field:jobFields}[] = [];
  

  constructor(private router: Router, private jobsListService: JobsListService) {}

  

  ngOnInit() {
    this.jobsListService.getFilteJobs(this.FieldFilter,this.AreaFilter).subscribe((jobs)=> (this.jobsList = jobs));
    if (this.userField == undefined) {
      this.router.navigate(['jobs']);
    } else {
      this.router.navigate(['jobs/filter']);
    }
  }
  


  filteringField(){
    this.jobsList = this.jobsList.filter(job=>job.name == "AQ job");
  }

  filterFieldJobs(filters:any[]){

    this.FieldFilter = filters;
    this.jobsListService.getFilteJobs(this.FieldFilter,this.AreaFilter).subscribe((jobs)=> (this.jobsList = jobs))
    console.log(this.jobsList);
  }

  filterAreaJobs(filters:any[]){
    this.AreaFilter = filters;
    this.jobsListService.getFilteJobs(this.FieldFilter,this.AreaFilter).subscribe((jobs)=> (this.jobsList = jobs));
  }

  addJobSubmited(job : {name:string,field:jobFields}){
    this.jobSubmited.push(job);
  }
  
}
