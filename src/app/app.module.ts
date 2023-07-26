import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoWhiteComponent } from 'src/assets/svgs/logo-white/logo-white.component';
import { SearchLogoComponent } from 'src/assets/svgs/search-icon/search-icon.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { BellIconComponent } from 'src/assets/svgs/bell-icon/bell-icon.component';
import { UserIconComponent } from 'src/assets/svgs/user-icon/user-icon.component';
import { CardComponent } from './components/card/card.component';
import { MoneyIconComponent } from 'src/assets/svgs/money-icon/money-icon-component';
import { HttpClientModule } from '@angular/common/http';
import { FrontComponent } from './components/card/front/front.component';
import { BackComponent } from './components/card/back/back.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SearchBarComponent,
    HomeComponent,
    LogoWhiteComponent,
    SearchLogoComponent,
    UserMenuComponent,
    BellIconComponent,
    UserIconComponent,
    CardComponent,
    MoneyIconComponent,
    FrontComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
