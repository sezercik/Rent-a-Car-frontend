import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarImages } from 'src/app/models/car/carImages';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carImages: CarImages[] = [];
  imageLoaded = false;
  imageRoot = 'https://localhost:44377/uploads/carimages/';
  currentImage: CarImages = {
    id: 0,
    carId: 0,
    imagePath: '',
    date: new Date(),
  };
  carDetails: CarDetail = {
    carId: 0,
    carName: '',
    brandName: '',
    colorName: '',
    dailyPrice: 0,
    modelYear: 0,
    description: '',
    imagePath: '',
  };
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      params['carId'] ? this.getCarDetailsById(params['carId']) : '';
      params['carId'] ? this.getCarImagesByCarId(params['carId']) : '';
    });
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data[0];
      console.log('details ' + this.carDetails);
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.currentImage = this.carImages[0];
      this.imageLoaded = true;
      console.log('sorun yok' + this.carImages);
    });
  }

  setCurrentImage(image: CarImages) {
    this.currentImage = image;
  }

  getImagesClass(image: CarImages) {
    return image.id === this.currentImage.id
      ? 'car-images main'
      : 'car-images ';
  }

  getButtonClass(image: CarImages) {
    if (image == this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }
}
