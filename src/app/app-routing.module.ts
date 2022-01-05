import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInformationComponent } from './components/customers/components/customer-information/customer-information.component';
const routes: Routes = [
  {path:'' , pathMatch: 'full', redirectTo: 'customers'},
  {path:'customers' , component: CustomersComponent},
  {path:'customers/:id' , component: CustomerInformationComponent},
  {path:'orders' , component: OrdersComponent },
  {path:'about' , component: AboutComponent },
  {path:'login' , component: LoginComponent },
  {path:'register' , component: RegisterComponent },
  {path:'**' , component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
