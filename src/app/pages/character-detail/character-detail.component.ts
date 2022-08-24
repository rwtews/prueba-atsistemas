import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character!: Character;
  imgAlt!: {name: string; nickname: string};

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private characterService: CharacterService,
  ) { }
  
  ngOnInit(): void {
    this.#getCharacterDetail();
  }

  #getCharacterDetail(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +(params.get('id') as string);
      this.characterService.get(id).subscribe({ next: (res) => {
        this.character = res;
        this.#setImgAlt(res);        
        this.#setMetaTitle(res.name);
      }});
    });
  }

  #setImgAlt(character: Character): void {
    this.imgAlt = { name: character.name, nickname: character.nickname };
  }

  #setMetaTitle(title: string): void {
    this.titleService.setTitle(`${this.translateService.instant('character')} | ${title}`);
  }
}
