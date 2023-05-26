import { Component ,OnInit} from '@angular/core';
import { CategoiesService } from 'src/app/services/categoies.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  categoryArray:any= [];
  constructor(private categoryService: CategoiesService){}

  ngOnInit(): void{
    this.categoryService.loadData().subscribe(val =>{
      this.categoryArray = val;
    })
  }
}
