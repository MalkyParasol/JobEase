import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { jobFields } from '../../models/fields';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {

  user:User|null = null;
  numCVs : Number = 0;
  userJobField:string|null = null;
  filterOn: boolean = false;
  constructor(private router:Router) { }
  ngOnInit()  {
    this.getStorageData();
    
  }
  
  
  navigateToLogin(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['/login'])
  }
  getStorageData(){
    const currentUser = localStorage.getItem("currentUser");
    const num = localStorage.getItem("numCVs");
    if(currentUser==null)
    {
        this.router.navigate(['/login']);
    }
    else{
     this.user = JSON.parse(currentUser);
    }
    if(num)
    {
      this.numCVs =Number(num) ;
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
