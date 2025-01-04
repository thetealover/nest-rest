import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type
      host: 'localhost', // Database host
      schema: 'test',
      port: 5432, // Database port
      username: 'pairberry', // Database username
      password: 'password', // Database password
      database: 'pairberry', // Database name
      entities: [__dirname + '/../../**/*.entity.{js,ts}'], // Path to your entities
      migrations: [__dirname + './migration/*.migration.{js,ts}}'],
      synchronize: true, // Synchronize database schema with entities (set to false in production)
    }),
  ],
})
export class DatabaseModule {}
