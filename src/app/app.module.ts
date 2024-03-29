import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import {VideoScrollComponent} from "./component/video-scroll/video-scroll.component";
import {NotfundComponent} from "./component/notfund/notfund.component";
import { TrashbagComponent } from './component/trashbag/trashbag.component';
import { CityComponent } from './component/city/city.component';
// Import the functions you need from the SDKs you need

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {environment} from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MailComponent} from "./component/mail/mail.component";
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    VideoScrollComponent,
    NotfundComponent,
    TrashbagComponent,
    CityComponent,
    MailComponent,
    FooterComponent,

  ],
    imports: [
        BrowserModule,
        
        AngularFireModule.initializeApp(environment.firebase, 'trashtag-website'),
        RouterModule.forRoot([
            {path: '', component: LandingPageComponent},
            {path: '', component: NotfundComponent},
            {path: 'trashbag', component: TrashbagComponent},
            {path: 'city', component: CityComponent}

        ]),
        ReactiveFormsModule,
        FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      AngularFirestoreModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
