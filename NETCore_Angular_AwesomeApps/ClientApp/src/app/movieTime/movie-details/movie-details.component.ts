import { MovieApiService } from './../services/movie-api.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private sub: Subscription;
  editMovieForm: FormGroup;
  movie: any;
  isEdit: boolean;

  constructor(private movieService: MovieApiService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.getMovie(id);
      }
    );

    $(function() {
        console.log('JQuery Ready');
    });

  }

  getMovie(id: any): void {
    this.movieService.getMovieById(id)
    .subscribe(
      data => {
        console.log(data);
        this.movie = data;
      }
    );
  }

  editMode() {
    this.isEdit = true;
  }

  cancelMode() {
    this.isEdit = false;
  }

  submitEditedMovie(item: Movie) {
    console.log(item);
    console.log('Click');

    this.movieService.editMovie(item)
    .subscribe(data => {
      console.log('Update Successfully');
      this.isEdit = false;
    }, err => {
      console.log('Something went wrong!');
    });
  }


}
