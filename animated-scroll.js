document.querySelector('.scroll-tracker').animate(
    {
      backgroundColor: ['#0059F7'],
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
      duration: 7500,
      fill: 'forwards',
      iterations: Infinity,
      easing: 'cubicBezier(.5, .05, .1, .3)',
     }
    
  );
