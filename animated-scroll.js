document.querySelector('.scroll-tracker').animate(
    {
      backgroundColor: ['#0059F7'],
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
      duration: 6500,
      fill: 'forwards',
      easing: 'linear',
      iterations: Infinity,
     }
  );
