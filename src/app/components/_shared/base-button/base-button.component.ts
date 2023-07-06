import { Component, Input } from '@angular/core';

@Component({
    selector: 'base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})

export class BaseButtonComponent {
    @Input() text: string | undefined
}
