import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViennoiserieLike } from "../viennoiserie-like/viennoiserie-like";

@Component({
  selector: 'app-viennoiserie',
  imports: [ViennoiserieLike],
  templateUrl: './viennoiserie.html',
  styleUrl: './viennoiserie.scss',
})
export class Viennoiserie {

  @Input() title?: string;
  @Input() description?: string ;
  @Input() imageUrl?: string ;
  @Input() likeCount: number = 0;
  @Output() like = new EventEmitter<string>();

  onLike() {
    this.like.emit(this.title);
  }
}
