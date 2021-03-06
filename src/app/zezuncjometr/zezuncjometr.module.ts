import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZezuncjometrForm} from './form/form.component';
import {ZezuncjometrEngineComponent} from './engine/engine.component';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const ZEZUNCJOMETR_COMPONENTS = [
    ZezuncjometrForm,
    ZezuncjometrEngineComponent,
    LoaderComponent
];

@NgModule({
    declarations: [...ZEZUNCJOMETR_COMPONENTS],
    exports: [...ZEZUNCJOMETR_COMPONENTS],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    providers: [

    ]
})
export class ZezuncjometrModule {
}
