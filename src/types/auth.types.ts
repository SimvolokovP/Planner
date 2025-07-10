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
  accessToken: string;
  user: IUser;
}

export interface IProfileStatistic {
  label: string;
  value: string;
}

export interface IProfileResponse {
  user: IUser;
  statistics: IProfileStatistic[];
}
