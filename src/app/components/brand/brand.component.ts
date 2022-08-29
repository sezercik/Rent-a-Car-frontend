import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand = { id: 0, name: '' };
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setBrandClass(brand: Brand) {
    this.currentBrand = brand;
  }

  getBrandClass(brand: Brand) {
    if (this.currentBrand.id == brand.id) {
      return 'list-group-item list-group-item-action list-group-item-success active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-success';
    }
  }

  getAllBrandClass() {
    if (this.currentBrand.id == 0) {
      return 'list-group-item list-group-item-action list-group-item-success active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-success';
    }
  }

  cleanCurrentBrand() {
    this.currentBrand = { id: 0, name: '' };
  }
}
