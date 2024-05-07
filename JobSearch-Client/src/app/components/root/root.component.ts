import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { jobFields } from '../../models/fields';
import { JobsListService } from '../../services/jobs-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {

  user:User|null = null;

  userJobField:string|null = null;
  
  filterOn: boolean = false;

  jobService = this.jobsListService;
  
  constructor(private router:Router,private jobsListService:JobsListService) { }
  ngOnInit()  {
    this.getStorageData();
    
  }
  
  
  navigateToLogin(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['/login'])
  }
  getStorageData(){
    const currentUser = localStorage.getItem("currentUser");
    // const num = localStorage.getItem("numCVs");
    if(currentUser==null)
    {
        this.router.navigate(['/login']);
    }
    else{
     this.user = JSON.parse(currentUser);
    }
    if (this.user?.jobField !== undefined) {
       this.userJobField = jobFields[this.user.jobField];
    }
  }
  switchFilete(){
    if(!this.filterOn)
    {
      this.filterOn = true;
    }
  }
}
