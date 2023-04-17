import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneProfileComponent } from './start-search-page/profiles/one-profile/one-profile.component';
import { StartSearchPageComponent } from './start-search-page/start-search-page.component';

const routes: Routes = [
  {path:"home", component:StartSearchPageComponent},
  {path:"profile/:id", component:OneProfileComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
