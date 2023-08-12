import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './main.html',
})
export class App implements OnInit {
  public formGroup = new FormGroup({});
  public ngOnInit(): void {
    console.log('irf');
    this.formGroup.addControl('base', new FormControl('17'));
  }
}

bootstrapApplication(App);
