import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//@Injectable()

//implemento httpInterceptos q me pedira q use el metodo intercept
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }//para redireccionar si o esta autenticado

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const jwt = sessionStorage.getItem('jwt');

    let request = req;// post o get

    if(jwt){
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ jwt }`
        }
      })
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }
        else if (err.status === 403) {
          this.router.navigateByUrl('/login');
        }

        return throwError( err );
      })
    );
  }
}