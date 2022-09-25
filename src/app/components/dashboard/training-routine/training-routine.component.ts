import { Component, OnInit ,ViewChild} from '@angular/core';
import { TrainingRoutineData } from '../../../models/trainingRoutineData';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingroutineDataService } from '../../../services/trainingroutine-data.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-training-routine',
  templateUrl: './training-routine.component.html',
  styleUrls: ['./training-routine.component.css']
})
export class TrainingRoutineComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<TrainingRoutineData>();

  training!: TrainingRoutineData[];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private trainingService : TrainingroutineDataService) { }

  ngOnInit(): void {
    this.getTrainingRoutineData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrainingRoutineData() {
    this.trainingService.getTrainingRoutineData()
    .subscribe((data: TrainingRoutineData[]) =>{
      {
        this.training = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
