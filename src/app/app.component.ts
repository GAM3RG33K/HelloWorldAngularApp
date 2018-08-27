import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Project Hello World';

  post = {
    title: 'Title',
    isFavorite: false
  };

  onFavoriteChanged(isFavorite) {
    console.log('isFavorite :', isFavorite);
  }

}
