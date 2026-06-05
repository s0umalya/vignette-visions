import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import {
  User,
  UserRole
} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSignal =
    signal<User | null>(null);

  currentUser =
    computed(() => this.currentUserSignal());

  role =
    computed<UserRole>(() =>
      this.currentUserSignal()?.role ?? 'guest'
    );

  isAuthenticated =
    computed(() =>
      this.currentUserSignal() !== null
    );

  isAdmin =
    computed(() =>
      this.role() === 'admin'
    );

  isUser =
    computed(() =>
      this.role() === 'user'
    );

  loginAsAdmin(): void {

    this.currentUserSignal.set({
      id: '1',
      name: 'Soumalya',
      email: 'admin@vignettevisions.com',
      role: 'admin'
    });

  }

  loginAsUser(): void {

    this.currentUserSignal.set({
      id: '2',
      name: 'Demo User',
      email: 'user@test.com',
      role: 'user'
    });

  }

  logout(): void {
    this.currentUserSignal.set(null);
  }

}