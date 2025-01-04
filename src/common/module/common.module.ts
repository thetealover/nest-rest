import { ConsoleLogger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ConsoleLogger],
  controllers: [],
})
export class CommonModule {}
