import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../core/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe(console.log);
  }
}
