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

  setSession(
    token: string,
    user: User
  ): void {

    this.tokenSignal.set(token);

    this.currentUserSignal.set(user);

  }

  logout(): void {

    this.tokenSignal.set(null);

    this.currentUserSignal.set(null);

  }

}