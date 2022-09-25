import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { StatisticsComponent } from './components/dashboard/statistics/statistics.component';
import { MealPlansComponent } from './components/dashboard/meal-plans/meal-plans.component';
import { TrainingRoutineComponent } from './components/dashboard/training-routine/training-routine.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainingInformationComponent } from './components/dashboard/training-information/training-information.component'
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    StatisticsComponent,
    MealPlansComponent,
    TrainingRoutineComponent,
    TrainingInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
