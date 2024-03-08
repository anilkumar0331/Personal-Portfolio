import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{

  workexp: any;

  constructor(private portfolioService: PortfolioService){}
  
  ngOnInit(): void {
    this.workexp =  this.portfolioService.exprience();
  }

}
