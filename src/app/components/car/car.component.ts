import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  // brandId yerine name eklemek için carDetails'i kullandım. Başka yöntem olabilir ama emin değilim.
  // cars: Car[] = [];
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      console.log(response);
      this.dataLoaded = true;
    });

    // this.carService.getCars().subscribe((response) => {
    //   this.cars = response.data;
    //   this.dataLoaded = true;
    // });
  }
}
