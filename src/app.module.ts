import { Module } from '@nestjs/common';
import { UserModule } from './user/module/user.module';
import { CommonModule } from './common/module/common.module';

@Module({
  imports: [CommonModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
