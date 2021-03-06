import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurUser = createParamDecorator(
  (context: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
