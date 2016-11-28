import { Storage } from './storage';
import { NgModule } from '@angular/core';
import { UpupPipe } from './upup.pipe';

@NgModule({
  providers: [Storage],
  declarations: [UpupPipe],
  exports: [UpupPipe]
})

export class UtilsModule {

}
