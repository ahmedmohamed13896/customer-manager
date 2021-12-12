import { NgModule } from '@angular/core';
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
import { CardViewComponent } from './components/customers/card-view/card-view.component';
import { ListViewComponent } from './components/customers/list-view/list-view.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomerInformationComponent } from './components/customers/customer-information/customer-information.component';

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
    CustomerInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbNavModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
