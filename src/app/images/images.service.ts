import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private api = 'https://api.giphy.com/v1/stickers/search?q=cat&limit=10&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    return this.http.get(this.api);
  }
}
