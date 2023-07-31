import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './Components/first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './Components/second-page/second-page.component';
import { ThirdPageComponent } from './Components/third-page/third-page.component';
import { InputTabComponent } from './Components/input-tab/input-tab.component';
import { FourthComponent } from './Components/fourth/fourth.component';
import { ComponentXComponent } from './Components/component-x/component-x.component';
import { ComponentYComponent } from './Components/component-y/component-y.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactStorageService } from './contact-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    InputTabComponent,
    FourthComponent,
    ComponentXComponent,
    ComponentYComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContactStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
