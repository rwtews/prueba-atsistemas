import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character/character.service';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss']
})
export class ListOfCharactersComponent implements OnInit {
  characterList!: Character[];

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterService.getList().subscribe({
      next: (res) => this.characterList = res,
    })
  }
}
