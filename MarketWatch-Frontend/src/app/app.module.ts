import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent} from './components/header/header.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SingleHoldingComponent } from './components/single-holding/single-holding.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockNewsComponent } from './components/stock-news/stock-news.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TrendingStocksComponent } from './components/trending-stocks/trending-stocks.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StockComponent } from './components/stock/stock.component';
import { PortfolioSingleComponent } from './components/portfolio-single/portfolio-single.component';

import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LoginService } from './services/login/login.service';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { HelpComponent } from './help/help.component';
// import { RouterModule } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FooterComponent,
    HeaderComponent,
    NewsDetailsComponent,
    PortfolioComponent,
    SearchResultsComponent,
    SingleHoldingComponent,
    StockDetailsComponent,
    StockNewsComponent,
    TransactionsComponent,
    TrendingStocksComponent,
    WatchlistComponent,
    HomePageComponent,
    StockComponent,
    PortfolioSingleComponent,
    PortfolioHomeComponent,
    WalletComponent,
    LoginComponent,
    SignupComponent,
    HelpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
