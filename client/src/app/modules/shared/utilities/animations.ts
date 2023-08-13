import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
  AnimationGroupMetadata,
  sequence,
} from '@angular/animations';
import { isAbsolute } from 'path';

export const sliderAnimation = trigger('activeRouteIndex', [
  transition('* <=> *', slideTo('left')),
  // transition(':decrement', slideTo('right')),
]);

function slideTo(direction): AnimationGroupMetadata {
  const optional = { optional: true };
  console.log('slideTo called');

  return group([
    // slide existing page from 0% to -100% to the left
    query(
      ':leave',
      sequence([
        animate(
          '500ms ease',
          style({
            transform: 'translateX(-100%)',
          }),
        ),
      ]),

      optional,
    ),
    // slide new page from 100% to 0% to the left
    query(
      ':enter',
      sequence([
        style({
          transform: 'translateX(100%)',
          position: 'absolute',
          right: 0,
        }),
        animate(
          '500ms ease',
          style({
            transform: 'translateX(0%)',
            position: 'relative',
          }),
        ),
      ]),
      optional,
    ),
  ]);
}
