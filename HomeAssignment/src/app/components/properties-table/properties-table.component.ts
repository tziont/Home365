import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { MatPaginator } from '@angular/material/paginator';
import { PropertiesEndpointService } from 'src/app/services/properties-end-point.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { Property } from '../../types/property';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss'],
})
export class PropertiesTableComponent implements OnInit, OnDestroy {
  private termination: Subject<null> = new Subject();
  private terminate$: Observable<null> = this.termination.asObservable();
  isShow: boolean;
  propertiesList: MatTableDataSource<Property>;
  rowPropertiesList: MatTableDataSource<Property>;
  filterdTenantValue: string;
  filterdPropertyValue: string;
  displayedColumns: string[] = [
    'created',
    'property',
    'property status',
    'plan',
    'owner',
    'owner status',
    'tenant',
    'tenant status',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private properties: PropertiesEndpointService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.properties
      .getProperties()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.propertiesList = new MatTableDataSource(res);
        this.propertiesList.paginator = this.paginator;
        this.isShow = true;
      });
    this.propertiesList.filterPredicate = function (property, filter) {
      return (
        property.tenant?.tenantStatus.toLocaleLowerCase() ==
        filter.toLocaleLowerCase()
      );
    };
  }
  openDialog(item: string, status: string) {
    this.dialog.open(DialogModalComponent, {
      data: {
        item,
        status,
      },
    });
  }

  onChange(filterValue: string) {
    if (filterValue !== 'all') {
      this.propertiesList.filter = filterValue.trim().toLowerCase();
    } else {
      this.propertiesList.filter = '';
    }
    this.filterdPropertyValue = filterValue;
    this.filterdTenantValue = filterValue;
  }

  ngOnDestroy(): void {
    this.termination.next();
    this.termination.complete();
  }
}
