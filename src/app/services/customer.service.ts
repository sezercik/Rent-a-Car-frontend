import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from '../models/customer/customerDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  detailApiUrl = 'https://localhost:44377/api/customers/getcustomersdetails';
  constructor(private httpClient: HttpClient) {}

  getCustomersDetails(): Observable<CustomerDetailResponseModel> {
    return this.httpClient.get<CustomerDetailResponseModel>(this.detailApiUrl);
  }
}
