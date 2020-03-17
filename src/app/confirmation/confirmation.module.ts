import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageRoutingModule } from './confirmation-routing.module';

import { ConfirmationPage } from './confirmation.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment.prod';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [ConfirmationPage],
  providers: [AngularFirestore]
})
export class ConfirmationPageModule {}