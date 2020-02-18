import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule,MatProgressSpinnerModule,MatSidenavModule,MatTabsModule,MatDialogModule,MatInputModule,MatIconModule,MatButtonModule,MatListModule,MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { QaComponent } from './qa/qa.component';
import { QaViewComponent } from './qa-view/qa-view.component';
import { QareviewComponent } from './qareview/qareview.component';
import { FormsModule } from '@angular/forms';
import { GotologinComponent } from './gotologin/gotologin.component';
import { TermsComponent } from './terms/terms.component';
import { HowtoComponent } from './howto/howto.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NewsviewComponent } from './newsview/newsview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    QaComponent,
    QaViewComponent,
    QareviewComponent,
    GotologinComponent,
    TermsComponent,
    HowtoComponent,
    NewsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    AngularFullpageModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [RouterLink],
  bootstrap: [AppComponent],
  entryComponents:[QareviewComponent]
})
export class AppModule { }
