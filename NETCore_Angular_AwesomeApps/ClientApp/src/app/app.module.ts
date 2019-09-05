import { CosmosThreejsComponent } from './cosmos-threejs/cosmos-threejs.component';
import { MovieDetailsComponent } from './movieTime/movie-details/movie-details.component';
import { MovieAddComponent } from './movieTime/movie-add/movie-add.component';
import { MovieListComponent } from './movieTime/movie-list/movie-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
import {
  MatButtonModule,
  MatGridListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MovieListComponent,
    MovieAddComponent,
    MovieDetailsComponent,
    CosmosThreejsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: '', component: CosmosThreejsComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'movie-list', component: MovieListComponent },
      { path: 'movie-add', component: MovieAddComponent },
      { path: 'movie/:id', component: MovieDetailsComponent },
      { path: 'cosmos3D', component: CosmosThreejsComponent },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
