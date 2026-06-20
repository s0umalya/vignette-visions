export type UserRole =
  | 'user'
  | 'admin';

export interface User {

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  phoneNumber?: string;

  gender?: string;

  role: UserRole;

}