import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('router', [
      transition('0 => 1, 1 => 0, 0 => 2, 2 => 0, 0 => 3, 3 => 0, 0 => 4, 4 => 0, 2 => 4, 4 => 2', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ]),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'my-app';
}
