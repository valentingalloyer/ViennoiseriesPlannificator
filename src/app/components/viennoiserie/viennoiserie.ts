import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ViennoiserieLike } from "../viennoiserie-like/viennoiserie-like";
import { Router } from '@angular/router';

@Component({
  selector: 'app-viennoiserie',
  imports: [ViennoiserieLike],
  templateUrl: './viennoiserie.html',
  styleUrl: './viennoiserie.scss',
})
export class Viennoiserie {
  @Input({ required: true }) id!: number;
  @Input() title?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Output() like = new EventEmitter<string>();

  private readonly router = inject(Router);

  likeCountParent: number = 0;

  onLike(likeCount: number) {
    this.likeCountParent = likeCount;
    this.like.emit(this.title);
  }

  onDetails() {
    this.router.navigate(['/viennoiserie', this.id]);
  }
}
