import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { computeQuantities, LikedViennoiserie, ViennoiserieQuantity } from '../quantity-calculator';

@Component({
  selector: 'app-quantity-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './quantity-reactive-form.html',
  styleUrl: './quantity-reactive-form.scss',
})
export class QuantityReactiveForm {
  @Input() viennoiseries: LikedViennoiserie[] = [];

  quantities: ViennoiserieQuantity[] = [];

  quantityForm = new FormGroup({
    quantityControl: new FormControl(1),
    ratioVoraciteControl: new FormControl(4 / 3, [Validators.required, Validators.min(0)]),
  });

  onSubmit() {
    const formValue = this.quantityForm?.value;
    console.log(this.quantityForm);
    const qtyPerson = formValue?.quantityControl ?? 0;
    const ratioVoracite = formValue?.ratioVoraciteControl || 1;
    if (ratioVoracite === 0) {
      alert(
        'Le ratio de voracité ne peut pas être égal à zéro. Veuillez entrer une valeur valide.',
      );
      return;
    }
    this.quantities = computeQuantities(this.viennoiseries, qtyPerson, ratioVoracite);
  }
}
