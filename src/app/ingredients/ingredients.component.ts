import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../core/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  constructor(private ingredientsService: IngredientsService) {}

  ingredientsObject = [
    {
      Id: 0,
      NameEn: 'Carrot',
      NutritionalIngredientsId: [0, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 19]
    },
    {
      Id: 1,
      NameEn: 'Apple',
      NutritionalIngredientsId: [1, 2, 3, 4, 5, 7, 8, 9, 11, 20]
    },
    {
      Id: 2,
      NameEn: 'Cheese',
      NutritionalIngredientsId: [0, 4, 5, 8, 10, 11, 13, 14, 15, 17, 19, 20]
    }
  ];

  nutritionalObject = [
    { Id: 0, nameEn: 'Wartość energetyczna', Value: 41, unit: 'kcal' },
    { Id: 1, nameEn: 'Tłuszcz', Value: 0.2, unit: 'g' },
    { Id: 2, nameEn: 'Kwasy tłuszczowe nasycone', Value: 0, unit: 'g' },
    {
      Id: 3,
      nameEn: 'Kwasy tłuszczowe wielonienasycone',
      Value: 0.1,
      unit: 'g'
    },
    { Id: 4, nameEn: 'Kwasy tłuszczowe jednonienasycone', Value: 0, unit: 'g' },
    { Id: 5, nameEn: 'Kwasy tłuszczowe trans', Value: 0, unit: 'g' },
    { Id: 6, nameEn: 'Cholesterol', Value: 0, unit: 'mg' },
    { Id: 7, nameEn: 'Sód', Value: 69, unit: 'mg' },
    { Id: 8, nameEn: 'Potas', Value: 320, unit: 'mg' },
    { Id: 9, nameEn: 'Węglowodany', Value: 10, unit: 'g' },
    { Id: 10, nameEn: 'Błonnik', Value: 2.8, unit: 'g' },
    { Id: 11, nameEn: 'Cukry', Value: 4.7, unit: 'g' },
    { Id: 12, nameEn: 'Białko', Value: 0.9, unit: 'g' },
    { Id: 13, nameEn: 'Witamina A', Value: 706, unit: 'IU' },
    { Id: 14, nameEn: 'Kwas askorbinowy', Value: 5.9, unit: 'mg' },
    { Id: 15, nameEn: 'Wapń', Value: 33, unit: 'mg' },
    { Id: 16, nameEn: 'Żelazo', Value: 0.3, unit: 'mg' },
    { Id: 17, nameEn: 'Witamina D', Value: 0, unit: 'IU' },
    { Id: 18, nameEn: 'Witamina B6', Value: 0.1, unit: 'mg' },
    { Id: 19, nameEn: 'Witamina B12', Value: 0, unit: 'µg' },
    { Id: 20, nameEn: 'Magnez', Value: 12, unit: 'mg' }
  ];

  showList(ingredients) {
    console.log(ingredients);
  }

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe(console.log);
  }
}
