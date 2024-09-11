// Initialize the carousel and set autoplay interval
const cardCarousel = document.querySelector('#cardCarousel');
const bootstrapCarousel = new bootstrap.Carousel(cardCarousel, {
  interval: 3000, // Slide every 3 seconds
  ride: 'carousel', // Automatically start sliding
});

// Adding event listener to pause the carousel when hovering
cardCarousel.addEventListener('mouseenter', function () {
  bootstrapCarousel.pause();
});

// Resume carousel autoplay when mouse leaves
cardCarousel.addEventListener('mouseleave', function () {
  bootstrapCarousel.cycle();
});