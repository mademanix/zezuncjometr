import {Component, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {ThemePalette} from "@angular/material/core";


@Component({
    selector: 'app-lodaer',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {

    color: ThemePalette;
    mode: ProgressSpinnerMode;
    value: number;

    constructor() {
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.value = 50;
    }

    ngOnInit(): void {
    }

}
