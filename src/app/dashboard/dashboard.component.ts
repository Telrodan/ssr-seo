import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  title = 'Team Manager Dashboard';
  heroes: Hero[] = [];

  constructor(private metaTagService: Meta, private titleService: Title, private heroService: HeroService) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      {name: 'description', content: 'Dashboard of Team Manager'},
    ])
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
