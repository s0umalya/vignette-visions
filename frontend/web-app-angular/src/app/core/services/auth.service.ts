import {
  Injectable,
  computed,
  signal
} from '@angular/core';
import { User } from '../../features/auth/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSignal =
    signal<string | null>(null);

  private currentUserSignal =
    signal<User | null>(null);

  token = computed(() =>
    this.tokenSignal()
  );

  currentUser = computed(() =>
    this.currentUserSignal()
  );

  isAuthenticated = computed(() =>
    !!this.currentUserSignal()
  );

  isAdmin = computed(() =>
    this.currentUserSignal()?.role === 'admin'
  );

  constructor() {

    const token =
      localStorage.getItem('token');

    const user =
      localStorage.getItem('user');

    if (token && user) {

      this.tokenSignal.set(token);

      this.currentUserSignal.set(
        JSON.parse(user)
      );

    }

  }

  setSession(
    token: string,
    user: User
  ): void {

    this.tokenSignal.set(token);

    this.currentUserSignal.set(user);

    localStorage.setItem('token', token);

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

  }

  logout(): void {
    this.tokenSignal.set(null);
    this.currentUserSignal.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}