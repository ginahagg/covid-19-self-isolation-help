import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PeopleIsolatingPageRoutingModule } from "./people-isolating-routing.module";

import { PeopleIsolatingPage } from "./people-isolating.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleIsolatingPageRoutingModule,
      NgPipesModule
  ],
  declarations: [PeopleIsolatingPage],
  providers: [AngularFirestore]
})
export class PeopleIsolatingPageModule {}