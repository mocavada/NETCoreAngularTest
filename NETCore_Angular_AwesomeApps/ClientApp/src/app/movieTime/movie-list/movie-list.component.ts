import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieApiService) { }

  ngOnInit() {

    this.movieService.movieResult$
    .subscribe(data => {
      if(data != null) {
        this.movies = data;
        console.log('Success');
        console.log(this.movies);
      }
    });

    this.movieService.getMovies();
    console.log(this.movies);
  }

}
