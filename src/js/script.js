var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    breakpoints: {
        640: {
        perPage: 1,
        },
    },
    perMove: 1,
    gap:'1rem',
    focus  : 'center',
  } );
  
  splide.mount();

  splide.on( 'active', function ( slide ) {
    slide.slide.firstElementChild.classList.add( 'bg-gradient-to-r' );
    slide.slide.firstElementChild.classList.add( 'from-green-300' );
    slide.slide.firstElementChild.classList.add( 'via-blue-500' );
    slide.slide.firstElementChild.classList.add( 'to-purple-600' );
  } );
  
  splide.on( 'inactive', function ( slide ) {
    slide.slide.firstElementChild.classList.remove( 'bg-gradient-to-r' );
    slide.slide.firstElementChild.classList.remove( 'from-green-300' );
    slide.slide.firstElementChild.classList.remove( 'via-blue-500' );
    slide.slide.firstElementChild.classList.remove( 'to-purple-600' );
  } );