import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
    declarations: [AppComponent, FooterComponent, HeaderComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
})
export class AppModule {}
