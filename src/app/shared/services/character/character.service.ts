import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly ENDPOINT = `${environment.endpointApi}/api/characters`;
  private readonly HEADERS = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(
    private http: HttpClient,
  ) { }

  getList(): Observable<Character[]> {
    return this.http.get<Character[]>(this.ENDPOINT, { headers: this.HEADERS });
  }
}
