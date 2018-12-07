import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return next.handle(request).pipe(catchError(err => {


        let errorMessageObject;

        try {

          errorMessageObject = JSON.parse(err.error);

        } catch (e) {

          // do nothing because request error is already an object

          errorMessageObject = err.error;
        }

        const error = errorMessageObject.message;
        console.log(error || error.status)
        return throwError(error);


        // return next.handle(request);
      })
    );
  }
}
