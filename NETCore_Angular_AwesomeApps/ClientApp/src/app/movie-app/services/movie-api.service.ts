import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

moviesApiUrl = 'http://localhost:5000/api/movies';
movieResult$ = new BehaviorSubject<[Movie]>(null);

constructor(private http: HttpClient,
  private router: Router) { }


getMovies() {
  this.http.get<[Movie]>(this.moviesApiUrl)
  .subscribe(data => {
    this.movieResult$.next(data)
  }, err => {
    console.log('Something Wrong' + err);
  });
}

}
