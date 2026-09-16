import { Component } from '@angular/core';
import { Viennoiserie } from "../viennoiserie/viennoiserie";
import { DatePipe } from "@angular/common";
import { QuantityReactiveForm } from '../quantity-reactive-form/quantity-reactive-form';
interface ViennoiserieInfo {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home-page',
  imports: [Viennoiserie, DatePipe, QuantityReactiveForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  onLike(title: string) {
    alert(`Vous avez aimé ${title} !`);
  }

  dateToday = new Date();

  viennoiseries : ViennoiserieInfo[] = [
    { id: 1, title: 'Croissant', description: 'Ceci est un croissant', imageUrl: 'croissant.png' },
    { id: 2, title: 'Chocolatine', description: 'Ceci est une chocolatine', imageUrl: 'chocolatine.jpg' },
    { id: 4, title: 'Pain aux raisins', description: 'Ceci est un pain aux raisins', imageUrl: 'pain_aux_raisins.jpg' },
    { id: 3, title: 'Chouquette', description: 'Ceci est une chouquette', imageUrl: 'chouquette.png' }
  ];
}
