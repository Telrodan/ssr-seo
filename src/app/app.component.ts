import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private metaTagService: Meta){
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-08-07', scheme: 'YYYY-MM-DD' },
      { name: 'author', content: 'Bence KN' },
      { name: 'keywords', content: 'Team Manager, Angular SEO, Angular Universal, TypeScript, JavaScript, HTML, CSS' },
      { charset: 'UTF-8' }
    ])
  }
}
