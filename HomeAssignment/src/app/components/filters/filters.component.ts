import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
@Input() propertiesFilterValue: string;
@Input() tenantFilterValue: string;
@Output() filterEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterItem(itemStatus:string){
    this.filterEvent.emit(itemStatus);
  }

}
