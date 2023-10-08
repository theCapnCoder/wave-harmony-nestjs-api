import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { BearerAuthGuard } from '../guards/bearer.auth.guard';
import { RolesGuard } from '../guards/roles.guard';

export function Auth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(BearerAuthGuard, RolesGuard),
  );
}
