import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RulesComponent } from './components/rules/rules.component';
import { RuleComponent } from './components/rule/rule.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    RuleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
