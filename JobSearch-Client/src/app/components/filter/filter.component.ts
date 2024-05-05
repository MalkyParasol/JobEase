import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { NgModel } from '@angular/forms';

type FilterBy = 'fields' | 'areas';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{

  @Input() enum:any 
  @Input() filterBy :FilterBy | undefined 
  @Output() onFilter = new EventEmitter<any>()

  ngOnInit(): void {
    for(const key in this.enum){
      if(isNaN(Number(key))){
        this.filters.push({
          value:this.enum[key],
          lable:key,
          selected:false,
        })
      }
    }
  }
  

  filterOn:boolean = false;

  filters : {value: any,lable:string,selected:boolean}[]=[];


  ActivateAreaFilter(){
    this.filterOn = true;
  }

  filter(){
    const selectedFilters = this.filters.filter(f => f.selected);

    const filteredValues = selectedFilters.map(filter=>filter.value);
    if (selectedFilters) {
      this.onFilter.emit(filteredValues);
    }
    this.filterOn = false;    
    
  }
}
