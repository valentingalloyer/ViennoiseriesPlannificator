import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // L'état est privé en écriture (via le signal) mais lisible publiquement
  readonly isLoggedIn = signal<boolean>(false);

  toggleLogin(): void {
    this.isLoggedIn.update((status) => !status);
  }
}
