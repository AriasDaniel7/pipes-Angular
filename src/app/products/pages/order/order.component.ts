import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public isUppercase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Lintena Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  ngOnInit() {}

  toggleUpperCase(): void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
