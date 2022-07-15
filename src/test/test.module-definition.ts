import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface TestModuleOptions {
  someValue: string;
}

export const { ConfigurableModuleClass } =
  new ConfigurableModuleBuilder<TestModuleOptions>().build();
