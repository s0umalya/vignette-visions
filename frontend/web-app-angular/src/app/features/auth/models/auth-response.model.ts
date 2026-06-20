import { User } from '../../../features/auth/models/user.model';

export interface AuthResponse {

  token: string;

  user: User;

}