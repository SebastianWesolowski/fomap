import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [DashboardComponent, IngredientsComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, IngredientsComponent]
})
export class CoreModule {}
