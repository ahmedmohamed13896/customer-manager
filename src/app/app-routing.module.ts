import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInformationComponent } from './components/customers/components/customer-information/customer-information.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [
  {path:'' , pathMatch: 'full', redirectTo: 'customers'},
  {path:'customers' , component: CustomersComponent,canActivate:[AuthGuardGuard]},
  {path:'customers/:id' , component: CustomerInformationComponent,canActivate:[AuthGuardGuard]},
  {path:'orders' , component: OrdersComponent ,canActivate:[AuthGuardGuard]},
  {path:'about' , component: AboutComponent ,canActivate:[AuthGuardGuard]},
  {path:'login' , component: LoginComponent },
  {path:'register' , component: RegisterComponent },
  {path:'**' , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
