export interface IAuthForm {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name?: string;
  email: string;
  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
}

export interface IAuthResponse {
  accesToken: string;
  user: IUser;
}
