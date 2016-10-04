import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {TestModule} from "./test.module";
//import {Test} from "./test.component";


@NgModule({
    imports: [BrowserModule, TestModule ],
  declarations: [AppComponent ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
