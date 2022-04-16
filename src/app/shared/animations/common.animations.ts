import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export class CommonAnimations {
  public static slideActiveBackground = trigger('slideActiveBackground', [
    transition(':enter', [
      style({ right: '-300px', opacity: 0 }),
      animate('.5s', style({ right: '0', opacity: 1 })),
    ]),
    transition(':leave', [animate('.5s', style({ right: '-300px', opacity: 0 }))]),
  ]);

  public static detailExpand = trigger('detailExpand', [
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('350ms ease-out')),
  ]);

  public static rightSidebar = trigger('rightSidebar', [
    transition(':enter', [
      style({ right: '-485px' }),
      animate('.3s', style({ right: '0' })),
    ]),
    transition(':leave', [animate('.3s', style({ right: '-485px' }))]),
  ]);

  public static fadeIn = trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('.3s', style({ opacity: '1' })),
    ]),
    transition(':leave', [animate('.3s', style({ opacity: '0' }))]),
  ]);
}
