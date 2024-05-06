import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { jobFields } from '../../models/fields';
import { Areas } from '../../models/areas';
import { JobsListService } from '../../services/jobs-list.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private jobsListSevice: JobsListService){}
  
  @Input()job:Job | undefined;
  @Output() addJobSubmited = new EventEmitter<{name:string,field:jobFields}>()

  jobField = jobFields

  jobArea = Areas

  showDetailsOn : boolean = false;

  sendingCvOn : boolean = false;

  cvSended : boolean = false;

  selectedFile: File | null = null;
  

  showHideDetails(){
    this.showDetailsOn = ! this.showDetailsOn;
  }

  showSendingInput(){
    this.sendingCvOn = true;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  sendingCv() {
   
    if (!this.selectedFile) {
      alert('No file selected for upload');
      return;
    }
    else{
      console.log('Selected file:', this.selectedFile);
      alert("cv upload successfully");
      this.sendingCvOn = false;
      this.cvSended = true;
      this.jobsListSevice.addCv();
      this.addJobSubmited.emit({"name":this.job?.name!,"field":this.job?.field!});
    }
  }


}
