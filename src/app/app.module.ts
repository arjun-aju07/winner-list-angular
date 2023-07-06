import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseButtonComponent } from './components/_shared/base-button/base-button.component';
import { UsersComponent } from './pages/users/users.component';
import { WinnersComponent } from './pages/winners/winners.component';
import { ToppersComponent } from './pages/toppers/toppers.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'winners',
        component: WinnersComponent
    },
    {
        path: 'toppers',
        component: ToppersComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BaseButtonComponent,
        UsersComponent,
        WinnersComponent,
        ToppersComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
