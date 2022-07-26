import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./component/landing-page/landing-page.component";
import {TrashbagComponent} from "./component/trashbag/trashbag.component";
import {CityComponent} from "./component/city/city.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'trashbag', component: TrashbagComponent},
  {path: 'city', component: CityComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
