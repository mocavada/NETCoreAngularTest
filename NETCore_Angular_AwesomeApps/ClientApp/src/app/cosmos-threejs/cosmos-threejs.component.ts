import { CosmosThreejsService } from './cosmos-threejs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cosmos-threejs',
  templateUrl: './cosmos-threejs.component.html',
  styleUrls: ['./cosmos-threejs.component.css']
})
export class CosmosThreejsComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private cosmosServ: CosmosThreejsService) { }

  ngOnInit() {
    this.cosmosServ.createScene(this.rendererCanvas);
    this.cosmosServ.animate();
  }

}
