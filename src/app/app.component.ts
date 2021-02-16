import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {InputModel} from "./model/input-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  isShow = true;

  constructor() {
  }

  ngOnInit() {
    if (document.location.pathname.length > 1) {
      this.isShow = false;
    }
  }


  onClick(isShow?: boolean) {
    if (isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
