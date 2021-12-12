import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-krosovok-card',
  templateUrl: './krosovok-card.component.html',
  styleUrls: ['./krosovok-card.component.scss']
})
export class KrosovokCardComponent implements OnInit {
  ngOnInit(): void {
    $('#move').mousemove((event) => {
      const xAxis = (window.innerWidth / 2 - event.pageX) / 20;
      const yAxis = (window.innerHeight / 2 - event.pageY) / 20;

      $('#card').css('transform', 'rotateY(' + xAxis + 'deg) rotateX(' + yAxis + 'deg)');
    });

    $('#move').mouseenter(() => {
      $('h2, p').css({ 'transform': 'translateZ(50px)', 'text-shadow': '2px 7px 10px #00000033' });
      $('button').css({ 'transform': 'translateZ(50px)', 'box-shadow': '0px 3px 10px 0px rgb(0 0 0 / 40%)' });
      $('img').css({ 'transform': 'translateZ(50px) rotate(20deg) scale(1.2)', 'filter': 'drop-shadow(5px 10px 20px rgb(68, 68, 68))' });
      $('.img-block').css({ 'width': '330px', 'height': '330px' });

      setTimeout(() => {
        $('#card').css('transition', 'none');
      }, 1100);
    });

    $('#move').mouseleave(() => {
      $('#card').css({'transform': 'rotateY(' + 0 + 'deg) rotateX(' + 0 + 'deg)', 'transition': 'all 1s ease'});
      $('h2, p').css({ 'transform': 'translateZ(0)', 'text-shadow': 'unset' });
      $('button').css({ 'transform': 'translateZ(0)', 'box-shadow': '0px 0px 5px 0px #00000047' });
      $('img').css({ 'transform': 'translateZ(0) rotate(0deg) scale(1)', 'filter': 'drop-shadow(0px 1px 5px rgb(68, 68, 68))' });
      $('.img-block').css({ 'width': '350px', 'height': '350px' });
    });
  }
}
