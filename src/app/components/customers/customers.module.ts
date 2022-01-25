import { CustomersService } from './../../services/customers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CardComponent } from './components/card-view/card/card.component';
import { ListComponent } from './components/list-view/list/list.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { AddEditCustomerComponent } from './components/add-edit-customer/add-edit-customer.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    MapViewComponent,
    CardViewComponent,
    ListViewComponent,
    FilterPipe,
    CustomerInformationComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent,
    AddEditCustomerComponent,
    ConfirmationPopupComponent,
    CustomersComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbNavModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatDialogModule
  ],
  providers:[CustomersService]
})
export class CustomersModule { }
