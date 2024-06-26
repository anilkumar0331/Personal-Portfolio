import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skills: any;

  constructor(private portfolioService: PortfolioService){}
  
  ngOnInit(): void {
    this.skills =  this.portfolioService.getSkills();
  }

}