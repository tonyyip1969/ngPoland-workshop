import { Storage } from './storage';
import { NgModule } from '@angular/core';
import { UpupPipe } from './upup.pipe';
import { SunshineDirective } from './sunshine.directive';

@NgModule({
  providers: [Storage],
  declarations: [UpupPipe, SunshineDirective],
  exports: [UpupPipe, SunshineDirective]
})

export class UtilsModule {

}
