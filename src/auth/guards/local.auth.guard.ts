import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocaAuthlGuard extends AuthGuard('local') {}
