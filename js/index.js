jQuery.noConflict();
jQuery(document).ready(function($) {

  var currentWidth = window.innerWidth || document.documentElement.clientWidth;
  if (currentWidth >= 767) {

    $('#main').pagepiling({
      direction: 'horizontal',
      menu: '#menu',
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6']
    });

    $(".inner-content").mCustomScrollbar({
      snapAmount: 40,
      scrollButtons: { enable: true },
      keyboard: { scrollAmount: 40 },
      mouseWheel: { deltaFactor: 40 },
      scrollInertia: 400
    });
  }

  $('.view-map, .view-map-1').bind('click', function(e) {
    e.preventDefault();
    $('#dt-sc-popup-map').bPopup({
      easing: 'easeOutBack',
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      speed: 450,
      transition: 'slideUp',
      stylers: [
        { visibility: "on" },
        { color: "#aee2e0" }
				]
    });
    google.maps.event.trigger($("#dt-sc-popup-map")[0], 'resize');
  });
});