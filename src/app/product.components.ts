import { Component } from "@angular/core";              




@Component({
    selector: 'app-products',
    templateUrl: './product.components.html'
})

export class ProductsComponent{
    productName = 'A book';
    isDisabled= true;
    products=['A Book' , 'A Tree'];

  constructor(){
       setTimeout(() => {
      //      this.productName='A Tree';
      this.isDisabled= false;
        },3000);
            
        }

        onAddProduct()
        {
            this.products.push(this.productName);
        }
    }







