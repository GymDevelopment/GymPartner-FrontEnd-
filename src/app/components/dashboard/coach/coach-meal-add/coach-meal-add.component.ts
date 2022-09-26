import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MealDataService } from '../../../../services/meal-data.service';
import { MealData } from '../../../../models/mealData';



@Component({
  selector: 'app-coach-meal-add',
  templateUrl: './coach-meal-add.component.html',
  styleUrls: ['./coach-meal-add.component.css']
})
export class CoachMealAddComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mealService: MealDataService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.reactiveForm();
  }

  ngOnInit(): void {}

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      calories: ['', [Validators.required]],
      protein: ['', [Validators.required]],
      dietType: ['', [Validators.required]],
    });
  }

  saveMeal(): void {
    const meal: MealData = {
      id: 0,
      name: this.myForm.get('name')!.value,
      calories: this.myForm.get('calories')!.value,
      protein: this.myForm.get('protein')!.value,
      dietType: this.myForm.get('dietType')!.value,
    };
    this.mealService.addMeal(meal).subscribe({
      next: (data: any) => {
        this.snackBar.open('La dieta fue agregado con exito', '', {
          duration: 3000,
        });
        this.router.navigate(['/dashboard/coach/meal-plans']);
      },
      error: (err : any) => {
        console.log(err);
      },
    });
  }
}
