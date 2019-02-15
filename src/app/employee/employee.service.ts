import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, @Inject('BACKEND_API_URL') private apiUrl: string) {
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
