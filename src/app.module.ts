import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExampleModule } from './examples/example.module';
import { ExamplesController } from './examples/controllers/app.controller';
import { ExamplesService } from './examples/services/app.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database')(),
    }),
    AuthModule,
    UsersModule,
    ExampleModule,
  ],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class AppModule {}
