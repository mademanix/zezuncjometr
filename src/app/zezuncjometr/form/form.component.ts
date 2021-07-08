import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-zezuncjometr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ZezuncjometrForm implements OnInit {

  constructor(private titleService: Title) {
      titleService.setTitle('Żezuncjometr - pobranie próbki');
  }

  ngOnInit(): void {
  }

}
