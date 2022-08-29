import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { Character } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character/character.service';

@Component({
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss']
})
export class ListOfCharactersComponent implements OnInit {
  characterList!: Character[];

  constructor(
    private characterService: CharacterService,
    private SpinnerService: SpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.#getList();
  }

  a(id: number) {
    this.router.navigate(['characters', id])
  }

  #getList() {
    this.SpinnerService.show();
    this.characterService.getList().subscribe({
      next: (res) => this.characterList = res,
      complete: () => this.SpinnerService.hiden()
    })
  }


}
