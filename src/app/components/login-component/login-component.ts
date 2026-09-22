import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  seConnecter() {
    // 1. On connecte l'utilisateur
    this.authService.toggleLogin();

    // 2. On le redirige programmatiquement vers le catalogue
    // Le tableau prend les segments de l'URL dans l'ordre
    this.router.navigate(['/admin', 'catalogue']);
  }
}
