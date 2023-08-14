import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public formGroup = new FormGroup({});
  public ngOnInit(): void {
    console.log('irf');
    this.formGroup.addControl('base', new FormControl('17'));
  }
}
