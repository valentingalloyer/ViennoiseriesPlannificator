import { Component, Input, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ViennoiserieService } from '../../service/viennoiserie-service';
import { Viennoiserie } from '../../model/viennoiserie';

@Component({
  selector: 'app-viennoiserie-details',
  imports: [AsyncPipe],
  templateUrl: './viennoiserie-details.html',
  styleUrl: './viennoiserie-details.scss',
})
export class ViennoiserieDetailsComponent implements OnInit {
  @Input() id!: string;

  private viennoiserieService = inject(ViennoiserieService);

  viennoiserie$!: Observable<Viennoiserie>;

  ngOnInit(): void {
    this.viennoiserieService.getViennoiserieById(this.id).subscribe({
      next: (v) => {
        console.log(v);
      },
    });
    if (this.id) {
      this.viennoiserie$ = this.viennoiserieService.getViennoiserieById(this.id);
      console.log(this.viennoiserie$);
    }
  }
}
