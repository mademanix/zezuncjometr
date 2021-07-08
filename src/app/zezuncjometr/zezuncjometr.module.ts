import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZezuncjometrForm} from './form/form.component';
import {ZezuncjometrEngineComponent} from './engine/engine.component';

const ZEZUNCJOMETR_COMPONENTS = [
    ZezuncjometrForm,
    ZezuncjometrEngineComponent
];

@NgModule({
    declarations: [...ZEZUNCJOMETR_COMPONENTS,],
    exports: [...ZEZUNCJOMETR_COMPONENTS],
    imports: [
        CommonModule
    ],
    providers: [

    ]
})
export class ZezuncjometrModule {
}
