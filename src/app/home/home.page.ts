import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profiles = new Array(6).fill({});

  constructor(
    private httpClient: HttpClient
  ) {
    setTimeout(() => {
      let data: any;

      this.httpClient.get("http://localhost:8100/assets/data/profiles.json")
        .subscribe(resp => {
          console.log('resp', resp);
          this.profiles = [];  // clear old dummy objects
          data = resp;

          data.forEach(e => {
            this.profiles.push(e);
          });
        }, err => {
          console.log('err', err);
        });
    }, 4000);
  }
}
