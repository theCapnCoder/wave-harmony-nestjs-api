import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  email: string;
  password?: string;
  access_token: string;
  first_name: string | null;
  last_name: string | null;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'maks@test.com',
      password: 'pass',
      access_token: 'access1',
      first_name: 'Maks',
      last_name: 'Petrov',
    },
    {
      id: 2,
      email: 'diane@test.com',
      password: 'pass',
      access_token: 'access2',
      first_name: 'Diane',
      last_name: 'Johnson',
    },
  ];

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  findByAccessToken(accessToken: string): User | undefined {
    return this.users.find((user) => user.access_token === accessToken);
  }
}
