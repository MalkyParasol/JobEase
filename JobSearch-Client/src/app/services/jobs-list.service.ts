import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsListService {

  constructor(private http:HttpClient) { }

  allJobs: Job[] = [];

  numCVs  = 0;
  

  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>("https://localhost:7016/JobSearch/jobs");
  }


  getFilteJobs(fields: Number[],areas:Number[]): Observable<Job[]>{
     return this.getJobs().pipe(
      map((jobs:Job[])=>{
        let jobMatches:Job[] = []
         jobs.forEach((job)=>{
         
          if((fields.length ===0 ||fields.includes(job.field))&&(areas.length === 0 || areas.includes(job.area))){
            jobMatches.push(job);
          }
           
          
        })
        return jobMatches;
        })
     );
    
  }

  addCv(){
    this.numCVs++;
  }

  
  
}
