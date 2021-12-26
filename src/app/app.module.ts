import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbNavModule, NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CardViewComponent } from './components/customers/components/card-view/card-view.component';
import { CustomerInformationComponent } from './components/customers/components/customer-information/customer-information.component';
import { ListViewComponent } from './components/customers/components/list-view/list-view.component';
import { CustomerDetailsComponent } from './components/customers/components/customer-details/customer-details.component';
import { CustomerOrdersComponent } from './components/customers/components/customer-orders/customer-orders.component';
import { EditCustomerComponent } from './components/customers/components/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    CardViewComponent,
    ListViewComponent,
    FilterPipe,
    CustomerInformationComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbNavModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
