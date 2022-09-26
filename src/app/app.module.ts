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
import { TrainingInformationComponent } from './components/dashboard/training-information/training-information.component';
import { MealInformationComponent } from './components/dashboard/meal-information/meal-information.component';
import { CoachHomeComponent } from './components/dashboard/coach/coach-home/coach-home.component';
import { CoachMealPlansComponent } from './components/dashboard/coach/coach-meal-plans/coach-meal-plans.component';
import { CoachProfileComponent } from './components/dashboard/coach/coach-profile/coach-profile.component';
import { CoachClientsComponent } from './components/dashboard/coach/coach-clients/coach-clients.component';
import { CoachTrainingRoutineComponent } from './components/dashboard/coach/coach-training-routine/coach-training-routine.component';
import { CoachMealAddComponent } from './components/dashboard/coach/coach-meal-add/coach-meal-add.component';
import { CoachSignInComponent } from './components/starting-screen/coach-sign-in/coach-sign-in.component';
import { CoachSignUpComponent } from './components/starting-screen/coach-sign-up/coach-sign-up.component';
import { ClientSignInComponent } from './components/starting-screen/client-sign-in/client-sign-in.component';
import { ClientSignUpComponent } from './components/starting-screen/client-sign-up/client-sign-up.component';
import { StartGymPartnerComponent } from './components/starting-screen/start-gym-partner/start-gym-partner.component';

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
    TrainingInformationComponent,
    MealInformationComponent,
    CoachHomeComponent,
    CoachMealPlansComponent,
    CoachProfileComponent,
    CoachClientsComponent,
    CoachTrainingRoutineComponent,
    CoachMealAddComponent,
    CoachSignInComponent,
    CoachSignUpComponent,
    ClientSignInComponent,
    ClientSignUpComponent,
    StartGymPartnerComponent,
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
