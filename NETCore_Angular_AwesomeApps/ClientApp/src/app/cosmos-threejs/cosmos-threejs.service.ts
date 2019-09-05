import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class CosmosThreejsService implements OnDestroy {

  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private starField: THREE.Points;




  private cube: THREE.Mesh;


  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }



  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    const scene = new THREE.Scene();
    {
      // const color = 0xFFFFFF;
      // const density = 0.1;
      scene.fog = new THREE.FogExp2(0x555555, 0.0003);
    }

    this.scene = scene;

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 200;

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    const starsGeometry = new THREE.Geometry();

    for ( let i = 0; i < 40000; i ++ ) {

      const star = new THREE.Vector3();
      star.x = Math.random() * 40000 - 20000;
      star.y = Math.random() * 7000 - 3500;
      star.z = Math.random() * 7000 - 3500;

      starsGeometry.vertices.push( star );
    }

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 6 });

    this.starField = new THREE.Points( starsGeometry, starsMaterial );
    this.scene.add( this.starField );

    this.camera.position.x = -1000;

    this.scene.add(this.camera);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // this.cube = new THREE.Mesh( geometry, material );
    // this.scene.add(this.cube);

  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.starField.rotation.x += 0.001;
    this.starField.rotation.y += 0.0008;
    this.starField.rotation.z += 0.005;

    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }


  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }
  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

}
