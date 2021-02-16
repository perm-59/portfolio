import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UtilService} from "./service/util.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  isShow = true;
  newRoom: string = '';
  rooms = [];

  constructor(private utilService: UtilService, private toastr: ToastrService) {
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

  createRoom() {
    if (this.newRoom.trim().length) {
      this.utilService.createRoom(this.newRoom).subscribe(response => {
        this.toastr.success(this.newRoom, 'Комната создана');
        this.newRoom = ''
      });
    } else {
      this.toastr.error('Введите название комнаты')
    }

  }

  getRoom() {
    this.utilService.getRoom().subscribe(resp => {
      if (resp.rooms) {
        let rooms = []
        resp.rooms.forEach(room => {
          rooms.push(room.name);
        })
        this.rooms = [...rooms]
      }
    })
  }
}
