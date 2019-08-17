import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
		LoadingComponent
  ],
  exports: [
		LoadingComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
