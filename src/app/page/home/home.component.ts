import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { RouterLink } from '@angular/router';
import IProduct from '../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit  {
  // B1: tạo db.json và copy data
   // B2: tạo script server trong package.json
   // B3: tạo service: ng g s service/product --skip-tests
   // B4: Thêm provideHttpClient() trong app.config.ts
   // B5: tạo hàm getList trong product service
   // B6: gọi service getList trong home
   
  products: IProduct[] = []
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getList().subscribe({
      next: (data) =>{ // xử lý nếu thành công
        // console.log(data);
        this.products = data    
      },
      error: (err) =>{ // xử lý nếu thất bại
        console.log(err);
      },
      complete: ()=>{
        console.log("Done");
      }
    })        
  }

  renderStatus(statusClient: boolean) {
    return statusClient ? 'Còn hàng' : 'Hết hàng';
  }
}
