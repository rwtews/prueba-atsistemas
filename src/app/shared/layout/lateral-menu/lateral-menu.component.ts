import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lateral-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, MatButtonModule],
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {

  readonly author = 'Robert García Morel';

  constructor() { }

  ngOnInit(): void {
  }

}
