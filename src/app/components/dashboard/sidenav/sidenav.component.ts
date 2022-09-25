import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SidenavDataService } from '../../../services/sidenav-data.service';
import { NavbarData } from '../../../models/navbarData';
import {transition, trigger , style, animate, keyframes} from '@angular/animations'
interface SideNavToggle{
  screenWidth : number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(private sidenavService: SidenavDataService) { }
  
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  collapsed = false;
  screenWidth = 0;
  navData !: NavbarData[];

  @HostListener('window.resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.getSidenavData();
    //console.log(this.navData);
    this.screenWidth = window.innerWidth;
  }
  getSidenavData(){
    this.sidenavService.getNavbarData().subscribe(
      (data: NavbarData[]) =>{this.navData = data;
      }
    );
  }

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
