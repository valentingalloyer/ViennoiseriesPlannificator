import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';
import { ViennoiserieLike } from "../viennoiserie-like/viennoiserie-like";

@Component({
  selector: 'app-viennoiserie',
  imports: [ReversePipe, ViennoiserieLike],
  templateUrl: './viennoiserie.html',
  styleUrl: './viennoiserie.scss',
})
export class Viennoiserie {

  @Input() title?: string;
  @Input() description?: string ;
  @Input() imageUrl?: string ;
  @Output() like = new EventEmitter<string>();

  likeCountParent: number = 0;
  
  onLike(likeCount: number) {
    this.likeCountParent = likeCount;
    this.like.emit(this.title);
  }
}
