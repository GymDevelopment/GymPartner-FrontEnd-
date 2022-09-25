import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MealPlansComponent } from './components/dashboard/meal-plans/meal-plans.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { StatisticsComponent } from './components/dashboard/statistics/statistics.component';
import { TrainingRoutineComponent } from './components/dashboard/training-routine/training-routine.component';
import { TrainingInformationComponent } from './components/dashboard/training-information/training-information.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/home', pathMatch: 'full'},
  {path: 'dashboard/home', component: HomeComponent},
  {path: 'dashboard/meal-plans', component: MealPlansComponent},
  {path: 'dashboard/profile', component: ProfileComponent},
  {path: 'dashboard/statistics', component: StatisticsComponent},
  {path: 'dashboard/training-routine', component: TrainingRoutineComponent},
  {path: 'training-information', component: TrainingInformationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
