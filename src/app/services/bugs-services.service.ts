import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugsServicesService {

  url = 'https://tranquil-caverns-87064.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  getBugs() {
        //  this.http.get('https://tranquil-caverns-87064.herokuapp.com/bugs').subscribe(_data => {
        //   return _data;
        // })
  }

  postBug(bug: Bug) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'crossDomain': 'true'
      }),
    }
    return this.http.post(this.url, JSON.stringify(bug), options);
  }
}

export class Bug {
  title!: string;
  description!: string;
  priority!: string;
  reporter!: string;
  status!: string;

  dateCreated!:Date
}
