import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    InputFormatDirective,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
