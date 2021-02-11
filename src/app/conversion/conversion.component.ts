import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent implements OnInit {
  @Input() name = '';
  @Output() data = new EventEmitter();
  public employees: any = [];
  errorMsg=''
  constructor(private _service: ServiceService) {}

  ngOnInit(): void {
    this._service.getEmployees()
                  .subscribe(data => this.employees = data,
                             error=>this.errorMsg=error);
  }

  onClick(event: any) {
    console.log(event);
    this.data.emit('Hitesh');
  }
}
