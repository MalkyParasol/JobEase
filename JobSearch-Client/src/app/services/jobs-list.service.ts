import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';
import { jobFields } from '../models/fields';
import { Observable, map } from 'rxjs';
import { Areas } from '../models/areas';

@Injectable({
  providedIn: 'root'
})
export class JobsListService {

  constructor(private http:HttpClient) { }

  allJobs: Job[] = [];

  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>("https://localhost:7016/JobSearch/jobs");
  }

  getFilteJobs(fields: jobFields[],areas:Areas[]): Observable<Job[]>{
     return this.getJobs().pipe(
      map((jobs:Job[])=>{
        if(fields.length==0 && areas.length == 0){
          return jobs;
        }
        return jobs.filter((job:Job)=>{
          const jobFieldMatches = fields.length === 0 || fields.some(field => field === job.field);
          const jobAreaMatches = areas.length === 0 || areas.some(area => area === job.area);
          return jobFieldMatches && jobAreaMatches;
        });
      })
     );
    
  }
  
}
