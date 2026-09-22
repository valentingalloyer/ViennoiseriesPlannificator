import { Component, computed, signal } from '@angular/core';

interface User {
  id: number;
  nom: string;
  actif: boolean;
}

@Component({
  selector: 'app-admin-users',
  imports: [],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.scss',
})
export class AdminUsers {
  // 1. Déclaration d'un signal contenant un tableau d'utilisateurs
  users = signal<User[]>([
    { id: 1, nom: 'Valentin', actif: true },
    { id: 2, nom: 'Loïc', actif: true },
    { id: 3, nom: 'Sarah', actif: false },
  ]);

  // 2. Création d'un signal dérivé (computed) qui se recalcule tout seul
  actifsCount = computed(() => {
    return this.users().filter((u) => u.actif).length;
  });

  // 3. Méthode pour mettre à jour le signal
  toggleStatut(userId: number) {
    this.users.update((currentUsers) =>
      currentUsers.map((user) => (user.id === userId ? { ...user, actif: !user.actif } : user)),
    );
  }
}
