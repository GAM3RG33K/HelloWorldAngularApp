import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from './AppError/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http, private url) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  delete(post) {
    return this.http
      .delete(this.url + '/' + post.id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: Response) {
      return Observable.throw(new AppError(error.json()));
  }
}
