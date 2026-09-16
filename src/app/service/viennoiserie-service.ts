import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viennoiserie } from '../model/viennoiserie';

@Injectable({
  providedIn: 'root',
})
export class ViennoiserieService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/viennoiseries';

  // Lancement de l'API : npx json-server --watch db.json --port 3000

  getViennoiseries(): Observable<Viennoiserie[]> {
    return this.http.get<Viennoiserie[]>(this.apiUrl);
  }

  getViennoiserieById(id: string): Observable<Viennoiserie> {
    return this.http.get<Viennoiserie>(`${this.apiUrl}/${id}`);
  }
}
