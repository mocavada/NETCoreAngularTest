import { environment } from './../../../environments/environment';
import { Movie } from './../models/movie';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
serverUrl = environment.serverAddress;
moviesApiUrl = this.serverUrl +  '/api/movies';
movieResult$ = new BehaviorSubject<[Movie]>(null);

constructor(private http: HttpClient,
          ) { }

getMovies() {
  this.http.get<[Movie]>(this.moviesApiUrl)
  .subscribe(data => {
    this.movieResult$.next(data);
  }, err => {
    console.log('Something Wrong' + err);
  });
}

getMovieById(id: number) {
  return this.http.get(this.moviesApiUrl + '/' + id );
}

editMovie(movie: Movie) {
  return this.http.put<any>(this.moviesApiUrl + '/' + movie.id, movie);
}

}
