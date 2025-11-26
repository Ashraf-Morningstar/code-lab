/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

// click "Run" to replay

var $body = $('body');

var loading = [
    { elements: $body, properties: { width: '20%' } },
    { elements: $body, properties: { width: '30%' } },
    { elements: $body, properties: { width: '50%' } },
    { elements: $body, properties: { width: '100%' } },
    { elements: $body, properties: { height: '100%' }, options: { 
      complete: function () { 
        $('.wrap').velocity( 'transition.slideUpIn' );
        $('img').velocity( 'transition.flipYIn' );
        $('html').css({ background: '#fff' });
      }
    }
  }
]; 

$.Velocity.RunSequence(loading);