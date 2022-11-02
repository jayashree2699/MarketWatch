import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './components/can-activate-route.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login/login.component';
import { PortfolioHomeComponent } from './components/portfolio-home/portfolio-home.component';
import { PortfolioSingleComponent } from './components/portfolio-single/portfolio-single.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { StockComponent } from './components/stock/stock.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: "stocks/:id",
    component: StockComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: '',
    component: HomePageComponent
  },
  //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },{
  // path: 'dashboard',
  //   component: HomePageComponent},
  { path: "signup", component: SignupComponent },
  {
    path: "port",
    component: PortfolioHomeComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: "ethical",
    component: PortfolioSingleComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: "portfolio/:id",
    component: PortfolioSingleComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: "watchlist",
    component: WatchlistComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: "wallet",
    component: WalletComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: "transaction",
    component: TransactionsComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path:'help',
    component:HelpComponent,
    canActivate:[CanActivateRouteGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
