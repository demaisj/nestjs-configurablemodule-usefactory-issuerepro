import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TestModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        someValue: config.get('SOME_VALUE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
