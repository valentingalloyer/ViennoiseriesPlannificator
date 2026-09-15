import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './quantity-reactive-form.html',
  styleUrl: './quantity-reactive-form.scss',
})
export class QuantityReactiveForm {
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
    var total = Math.ceil(qtyPerson * ratioVoracite);
    console.log(
      `Calcul des quantités pour ${qtyPerson} personnes avec un ratio de voracité de ${ratioVoracite} : ${total}`,
    );
  }
}
