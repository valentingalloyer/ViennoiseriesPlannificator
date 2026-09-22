import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // On lit la valeur du signal
  if (authService.isLoggedIn()) {
    return true;
  }

  // Redirection vers la route racine si non autorisé
  return router.createUrlTree(['/']);
};
