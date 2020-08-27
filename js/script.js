$("#btn-explore").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".ftco-section").offset().top,
    },
    800
  );
});

// $(".customer-logos").owlCarousel({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   arrows: false,
//   dots: false,
//   pauseOnHover: false,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 520,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//   ],
// });
