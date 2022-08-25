import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  targetLang!: string;

  readonly langs = [
    {viewValue: 'ES', value: 'es-ES'},
    {viewValue: 'EN', value: 'en-EN'}
  ];

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.addLangs(this.langs.map(e => e.value));
    this.#getDefaultLang();
  }
  
  translateLanguageTo(lang: {viewValue: string, value: string}) {
    this.translate.use(lang.value);    
  }

  #getDefaultLang(): void {
    this.targetLang = this.langs.find(e => e.value === this.translate.getDefaultLang())?.value ?? this.langs[0].value;
  }
}
