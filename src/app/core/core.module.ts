import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UserService)
  ],
  declarations: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
