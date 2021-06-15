/*
============================================
; Title:  composer.service.ts
; Author: Kevin Jones
; Date: 15 June 2021
; Description: Composer service file
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  // map map fullName & genre parameters to the class
  constructor() {
    // initialize composers array with 5 composer objects
    this.composers = [
      {
        composerId: 100,
        fullName: 'Joseph Bologne, Chevalier de Saint-Georges',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Florence Price',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Scott Joplin',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'George Bridgetower',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'William Grant Still',
        genre: 'Classical',
      },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
