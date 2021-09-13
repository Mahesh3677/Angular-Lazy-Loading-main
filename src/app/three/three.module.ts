import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ThreeRoutingModule } from "./three-routing.module";
import { ThreeComponent } from "./three.component";

@NgModule({
  declarations : [ThreeComponent],
  imports : [
    CommonModule,
    ReactiveFormsModule,
    ThreeRoutingModule
  ],
  exports : [ThreeComponent]
})
export class ThreeModule {}
