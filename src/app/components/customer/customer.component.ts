import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customer/customerDetail';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customersDetails: CustomerDetail[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomersDetails();
  }

  getCustomersDetails() {
    this.customerService.getCustomersDetails().subscribe((response) => {
      this.customersDetails = response.data;
    });
  }
}
