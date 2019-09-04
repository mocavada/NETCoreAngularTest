import { MovieApiService } from './../services/movie-api.service';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

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
