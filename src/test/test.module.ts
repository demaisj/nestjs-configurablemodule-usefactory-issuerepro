import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './test.module-definition';

@Module({})
export class TestModule extends ConfigurableModuleClass {}
