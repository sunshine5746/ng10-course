import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DialogComponent} from './components/dialog/dialog.component';
import { SizerComponent } from './components/sizer/sizer.component';
import {FormsModule} from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { TplVarComponent } from './components/tpl-var/tpl-var.component';
import { TplOperatorsComponent } from './components/tpl-operators/tpl-operators.component';
import { TransferPanelComponent } from './components/transfer-panel/transfer-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    TplVarComponent,
    TplOperatorsComponent,
    TransferPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
