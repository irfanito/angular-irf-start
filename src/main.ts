import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class App implements OnInit {
  public formGroup = new FormGroup({});
  public ngOnInit(): void {
    console.log('irf');
    this.formGroup.addControl('base', new FormControl('17'));
  }
}

bootstrapApplication(App);
