var slide_step = tns({
  container: "#slide_step",
  items: 1,
  controlsContainer: "#slide_stepControl",
  navAsThumbnails: true,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayButton: "#customize-toggle",
  gutter: 10,
  responsive: {
    767: {
      items: 3
    }
  }
});
