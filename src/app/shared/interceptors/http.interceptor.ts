import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  req = req.clone({
    setHeaders: {
      Authorization: 'Basic ' + btoa(authService.user() + ':' + authService.password())
    }
  });
  return next(req);
};
