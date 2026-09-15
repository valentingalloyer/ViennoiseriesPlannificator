import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity-template-form',
  imports: [FormsModule],
  templateUrl: './quantity-template-form.html',
  styleUrl: './quantity-template-form.scss',
})
export class QuantityTemplateForm {
  qtyPerson: number = 1;
  ratioVoracite: number = (4/3);

  onSubmit() {
    console.log(`Calcul des quantités pour ${this.qtyPerson} personnes avec un ratio de voracité de ${this.ratioVoracite} : ${Math.ceil(this.qtyPerson * this.ratioVoracite)}`);
  }
}
