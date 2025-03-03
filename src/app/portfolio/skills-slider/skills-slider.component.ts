import { Component, Input, OnInit } from '@angular/core';
import { concatMap, from, interval, repeat } from 'rxjs';

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.scss']
})
export class SkillsSliderComponent implements OnInit{

  @Input() skills: any[] = [];
  
  constructor(){}

  ngOnInit(): void {
    const infiniteStream = interval(1000).pipe(
      concatMap(i => from([this.skills[i % this.skills.length]])), 
      repeat()
    );
    infiniteStream.subscribe(value => {
      this.skills = this.skills.concat(value)
    });
  }

  calculateWidth(skillsLength: number) {
    const itemWidth = 200;
    const totalWidth = itemWidth * skillsLength;
    return `${totalWidth}px`;
  }

  calculateTransform(skillsLength: number) {
    const itemWidth = 200;
    return `calc(-${itemWidth}px * ${skillsLength})`;
  }

  calculateDuration(skillsLength: number) {
    const durationPerItem = 2;
    const totalDuration = durationPerItem * skillsLength;
    return `${totalDuration}s`;
  }

}
