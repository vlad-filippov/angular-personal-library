import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {
  ngOnInit(): void {
    let move;
    let clicked;
    let percentWidth;

    $('#switch').mousedown(() => {
      $('#switch').css('cursor', 'grabbing');
      clicked = true;
      $('body').mousemove((event) => {
        if (!clicked) { return }
        move = event.pageX;
        percentWidth = (move / 20).toFixed();

        if (percentWidth > 85 || percentWidth < 10) {
          $('span').hide();
        } else {
          $('span').show();
        }

        $('#after').css('width', move + 'px');
        $('.switcher').css('left', move + 'px');
      });
    });

    $(document).mouseup(() => {
      clicked = false;
      $('#switch').css('cursor', 'grab');
      $('#after').css('width', move + 'px');
      $('.switcher').css('left', move + 'px');
    });
  }

}
