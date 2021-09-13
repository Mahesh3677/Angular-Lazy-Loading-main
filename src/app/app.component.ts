import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }
  // async getOne() {
  //   this.viewContainerRef.clear();
  //   const { OneComponent } = await import('./one.component');
  //   this.viewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(OneComponent)
  //   );
  // }

  // async getTwo() {
  //   this.viewContainerRef.clear();
  //   const { TwoComponent } = await import('./two.component');
  //   this.viewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(TwoComponent)
  //   );
  // }
  // async getThree() {
  //   this.viewContainerRef.clear();
  //   const { TwoComponent } = await import('./three.component');
  //   this.viewContainerRef.createComponent(
  //     this.cfr.resolveComponentFactory(ThreeComponent)
  //   );
  // }
}