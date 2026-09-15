import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-viennoiserie-like',
  imports: [],
  templateUrl: './viennoiserie-like.html',
  styleUrl: './viennoiserie-like.scss',
})
export class ViennoiserieLike {
  @Input() likeCount: number = 0;
  @Output() likeCountChange = new EventEmitter<number>();

  onClick(){
    this.likeCount++;
    this.likeCountChange.emit(this.likeCount);
  }
}
