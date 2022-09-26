import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MealDataService } from '../../../../services/meal-data.service';
import { MealData } from '../../../../models/mealData';

@Component({
  selector: 'app-coach-meal-plans',
  templateUrl: './coach-meal-plans.component.html',
  styleUrls: ['./coach-meal-plans.component.css']
})
export class CoachMealPlansComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', "calories","protein", "dietType", 'actions'];
  
  dataSource = new MatTableDataSource<MealData>();


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private mealService : MealDataService) { }

  ngOnInit(): void {
    this.getMealData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getMealData() {
    this.mealService.getMealData()
    .subscribe((data: MealData[]) =>{
      {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  deleteMeal(id: number) {
    this.mealService.deleteMeal(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: MealData) => {
        return e.id !== id ? e : false;
      });
    });
  }

}
