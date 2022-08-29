import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color = { id: 0, name: '' };
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getColorClass(color: Color) {
    if (this.currentColor.id == color.id) {
      return 'list-group-item list-group-item-action list-group-item-success active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-success';
    }
  }
  setColorClass(color: Color) {
    this.currentColor = color;
  }
  getAllColorClass() {
    if (this.currentColor.id == 0) {
      return 'list-group-item list-group-item-action list-group-item-success active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-success';
    }
  }
  cleanCurrentColor() {
    this.currentColor = { id: 0, name: '' };
  }
}
