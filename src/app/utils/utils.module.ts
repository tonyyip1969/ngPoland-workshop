import { Storage } from './storage';
import { NgModule } from '@angular/core';
import { UpupPipe } from './upup.pipe';
import { SunshineDirective } from './sunshine.directive';
import { OnlyIfDirective } from './only-if.directive';
import { CountPipe } from './count.pipe';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  providers: [Storage],
  declarations: [UpupPipe, SunshineDirective, OnlyIfDirective, CountPipe, ActionButtonComponent],
  exports: [UpupPipe, SunshineDirective, OnlyIfDirective, CountPipe, ActionButtonComponent]
})

export class UtilsModule {

}
