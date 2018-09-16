import { PostService } from './post.service';
import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    InputFormatDirective,
    TextInputComponent,
    ContactFormComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CourseService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
