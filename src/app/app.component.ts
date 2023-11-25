import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChartLibrary';
  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(): void {
    let source = [
      this._http.get('https://jsonplaceholder.typicode.com/posts'),
      this._http.get('https://jsonplaceholder.typicode.com/comments'),
      this._http.get('https://jsonplaceholder.typicode.com/albums'),
    ];

    const apis = forkJoin<any>(source)
    apis
    .pipe(
      map((res: any )=> {
        let obj = [
          {
            posts: res[0],
            comments: res[1],
            alubum: res[2]
          }
        ]
        return obj
      })
    )
    .subscribe(console.log)
  }
}
