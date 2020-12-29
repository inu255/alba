'use strict';

(function initMap() {
  const position = { lat: 55.75891952693745, lng: 37.59045935989981 };
  const map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 14,
    center: position,
    disableDefaultUI: true,
  });
  const marker = new google.maps.Marker({
    position: position,
    icon: './svg/marker.svg',
    map: map,
  });

  fetch('./map-style.json')
  .then(responce => responce.json())
  .then(json => {
    map.setOptions({styles: json});
  })
}());
