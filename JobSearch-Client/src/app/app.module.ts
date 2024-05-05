import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RootComponent } from './components/root/root.component';
import { JobComponent } from './components/job/job.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JobsListService } from './services/jobs-list.service';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent,
    JobComponent,
    JobsListComponent,
    NotFoundComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService,JobsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
