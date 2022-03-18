import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  propertiesthis$: Observable<any>;
  constructor(public loader: LoaderService) {}

  ngOnInit(): void {}
}
