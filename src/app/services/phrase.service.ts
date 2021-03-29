import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phrase } from '../models/phrase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  url = "https://bilingual-children.herokuapp.com/phrases";

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    return this.httpClient.get(this.url)
      .toPromise();

  }



}
