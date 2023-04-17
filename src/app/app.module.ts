import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSearchPageComponent } from './start-search-page/start-search-page.component';
import { NavComponent } from './start-search-page/nav/nav.component';
import { SearchByComponent } from './start-search-page/search-by/search-by.component';
import { ProfilesComponent } from './start-search-page/profiles/profiles.component';
import { OneProfileComponent } from './start-search-page/profiles/one-profile/one-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './start-search-page/profiles/one-profile/form/form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StartSearchPageComponent,
    NavComponent,
    SearchByComponent,
    ProfilesComponent,
    OneProfileComponent,
    FormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
