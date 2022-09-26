import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MealPlansComponent } from './components/dashboard/meal-plans/meal-plans.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { StatisticsComponent } from './components/dashboard/statistics/statistics.component';
import { TrainingRoutineComponent } from './components/dashboard/training-routine/training-routine.component';
import { TrainingInformationComponent } from './components/dashboard/training-information/training-information.component';
import { MealInformationComponent } from './components/dashboard/meal-information/meal-information.component';
import { CoachHomeComponent } from './components/dashboard/coach/coach-home/coach-home.component';
import { CoachMealPlansComponent } from './components/dashboard/coach/coach-meal-plans/coach-meal-plans.component';
import { CoachProfileComponent } from './components/dashboard/coach/coach-profile/coach-profile.component';
import { CoachClientsComponent } from './components/dashboard/coach/coach-clients/coach-clients.component';
import { CoachTrainingRoutineComponent } from './components/dashboard/coach/coach-training-routine/coach-training-routine.component';
import { CoachMealAddComponent } from './components/dashboard/coach/coach-meal-add/coach-meal-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/home', pathMatch: 'full'},
  {path: 'dashboard/home', component: HomeComponent},
  {path: 'dashboard/meal-plans', component: MealPlansComponent},
  {path: 'dashboard/profile', component: ProfileComponent},
  {path: 'dashboard/statistics', component: StatisticsComponent},
  {path: 'dashboard/training-routine',   component: TrainingRoutineComponent},
  {path: 'dashboard/coach/home',              component: CoachHomeComponent},
  {path: 'dashboard/coach/meal-plans',        component: CoachMealPlansComponent},
  {path: 'dashboard/coach/profile',           component: CoachProfileComponent},
  {path: 'dashboard/coach/clients',        component: CoachClientsComponent},
  {path: 'dashboard/coach/training-routine',  component: CoachTrainingRoutineComponent},
  {path: 'training-information', component: TrainingInformationComponent},
  {path: 'meal-information', component: MealInformationComponent},
  {path: 'meal-add', component: CoachMealAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
