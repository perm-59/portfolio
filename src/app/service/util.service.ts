import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  urlTodo = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  constructor(private http: HttpClient) { }


  getTodo() {
    return this.http.get(this.urlTodo)
  }

  createRoom(nameRoom):  Observable<any> {
    return  <Observable<any>> this.http.post('http://localhost:8000/rooms', {"name": nameRoom})
  }

  getRoom():  Observable<any> {
    return  <Observable<any>> this.http.get('http://localhost:8000/rooms')
  }
}
