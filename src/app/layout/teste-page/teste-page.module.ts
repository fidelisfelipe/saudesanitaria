import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestePageRoutingModule } from './teste-page-routing.module';
import { TestePageComponent } from './teste-page.component';

@NgModule({
    imports: [CommonModule, TestePageRoutingModule],
    declarations: [TestePageComponent]
})
export class TestePageModule {}
