import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice = inject(AuthService);

  if(authservice.IsLoggedIn())
    {
      return true;
    }
    else{
      router.navigate(['/login']);
      return false;
    }


};
