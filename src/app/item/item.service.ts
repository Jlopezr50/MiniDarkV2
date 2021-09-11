import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor(private http: HttpClient){

  }

  getItems(): Observable<Object> {
    return this.http.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");

  }

}
