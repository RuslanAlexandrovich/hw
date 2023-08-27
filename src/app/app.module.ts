import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { GatesComponent } from './pages/gates/gates.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { RowlingComponent } from './pages/rowling/rowling.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gates', component: GatesComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'rowling', component: RowlingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GatesComponent,
    JobsComponent,
    RowlingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
