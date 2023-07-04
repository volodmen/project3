let myMap;
 
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [48.482552, 135.092231],
   zoom: 13,
   controls: [],
 });
 let coords = [
    [48.491629, 135.047623],
    [48.474162, 135.059788],
    [48.445924, 135.101204],
    [48.530467, 135.065323],
  ],
  myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: 'https://raw.githubusercontent.com/volodmen/project3/bccac8f90f4c2fd8d5a8651f7486d593ea701cf9/img/marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

for (let i = 0; i < coords.length; i++) {
  myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);