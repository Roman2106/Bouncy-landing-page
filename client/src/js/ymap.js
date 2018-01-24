export const initMap = () => {
  let myMap;
  let myPlacemark1;

  const init = () => {
    myMap = new ymaps.Map("yandexMap", {
      center: [38.70185551, 35.53665161],
      zoom: 14
    });
    myPlacemark1 = new ymaps.Placemark([38.70185551, 35.53665161], {
      hintContent: "BOUNCY",
      balloonContent: "CODE CAFE BOUNCY"
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable(["scrollZoom"]);
    myMap.controls.add("mapTools");
    myMap.controls.add("zoomControl");
  };

  init();
};