import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../product.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit{
  id: string|null = null
  selectedProduct: any
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private Location: Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // Lấy ID từ URL

    if (this.id) {
      this.productService.getById(this.id).subscribe((products) => {
        this.selectedProduct = products; // Gán dữ liệu sản phẩm
      });
    }
  }

  goBack() {
    this.Location.back(); // Quay lại trang trước
  }

  
}
