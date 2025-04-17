import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, ProductComponent]
})
export class AppComponent {
  // title = 'fe';
  data = {
    name: "Nguyễn Hồng Quân",
    age: 19,
    gender: true,
    avatar: "https://picsum.photos/seed/picsum/200/300",
    description: "Tôi là sinh viên trường FPT Polytechnic.",
    linkFB: "https://www.facebook.com/tung.vi.7982780"
  }

  renderGenner():string {
    return this.data.gender ? "Nam" : "Nữ";
  }
}
