import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/models/product';
import { Phrase } from 'src/app/models/phrase';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})

export class PhraseListComponent implements OnInit {
  productList: Array<Phrase> = new Array<Phrase>();

  constructor(private phraseService: PhraseService) { }

  ngOnInit(): void {
    this.phraseService.getAll()
      .then(response => {
        this.productList = response;
      })
  }


}
