import { Component, OnInit } from '@angular/core';
import { HomecardDataService } from '../../../services/homecard-data.service';
import { HomeCardData } from '../../../models/homeCardData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardData !: HomeCardData[];

  constructor(private homeCardService: HomecardDataService) { }

  ngOnInit(): void {
    this.gethomeCardsData();
  }
  gethomeCardsData(){
    this.homeCardService.gethomeCardData().subscribe((data: HomeCardData[])=>
       { this.cardData = data;
          console.log(this.cardData);
      }
    )
  }
}
