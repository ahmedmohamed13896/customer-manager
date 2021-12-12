import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customers: any , name:string): any {
    return customers.filter((customer:any)=>{

      const fullname = (customer.first_name + ' ' + customer.last_name).toLocaleLowerCase().trim();
      name = name.toLocaleLowerCase().trim();

      if(fullname.includes(name)){
        return true;
      }
      return false;
    });
  }

}
