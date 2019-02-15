import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  apiUrl: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.apiUrl = this.employeeService.getApiUrl();
  }

}
