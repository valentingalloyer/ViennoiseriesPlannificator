import { Component } from '@angular/core';
import { Viennoiserie } from "../viennoiserie/viennoiserie";
import { DatePipe } from "@angular/common";
import { QuantityReactiveForm } from '../quantity-reactive-form/quantity-reactive-form';
interface ViennoiserieInfo {
  title: string;
  description?: string;
  imageUrl: string;
  likes: number;
}

@Component({
  selector: 'app-home-page',
  imports: [Viennoiserie, DatePipe, QuantityReactiveForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  onLike(viennoiserie: ViennoiserieInfo) {
    viennoiserie.likes++;
  }

  dateToday = new Date();

  viennoiseries : ViennoiserieInfo[] = [
    { title: 'Croissant', description: 'Ceci est un croissant', imageUrl: 'croissant.png', likes: 0 },
    { title: 'Chocolatine', description: 'Ceci est une chocolatine', imageUrl: 'chocolatine.jpg', likes: 0 },
    { title: 'Pain aux raisins', description: 'Ceci est un pain aux raisins', imageUrl: 'pain_aux_raisins.jpg', likes: 0 },
    { title: 'Chouquette', description: 'Ceci est une chouquette', imageUrl: 'chouquette.png', likes: 0 }
  ];
}
