import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsListService {

  constructor(private http:HttpClient) { }

  getJobs(){
    return this.http.get<Job[]>("https://localhost:7016/JobSearch/jobs");
  }
  
}
