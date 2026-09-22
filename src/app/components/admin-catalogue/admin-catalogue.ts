import { Component, inject } from '@angular/core';
import { ViennoiserieService } from '../../service/viennoiserie-service';
import { Observable } from 'rxjs';
import { Viennoiserie } from '../../model/viennoiserie';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin-catalogue',
  imports: [AsyncPipe],
  templateUrl: './admin-catalogue.html',
  styleUrl: './admin-catalogue.scss',
})
export class AdminCatalogue {
  private nutritionService = inject(ViennoiserieService);

  // On déclare le flux
  viennoiseries$!: Observable<Viennoiserie[]>;

  ngOnInit() {
    // On affecte la requête HTTP au flux (sans faire de .subscribe())
    this.viennoiseries$ = this.nutritionService.getViennoiseries();
  }
}
