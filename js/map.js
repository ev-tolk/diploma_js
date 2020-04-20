window.onload = function () {
  // Создает экземпляр карты и привязывает его к созданному контейнеру
      var map = new YMaps.Map(document.getElementById("YMapsID"));

      // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
      map.setCenter(new YMaps.GeoPoint(8.695988, 50.113419), 10);
      

      map.addControl(new YMaps.TypeControl());
      map.addControl(new YMaps.TypeControl());
      map.addControl(new YMaps.ToolBar());
      map.addControl(new YMaps.Zoom());
      map.addControl(new YMaps.MiniMap());
      map.addControl(new YMaps.ScaleLine());
  };

/*document.getElementById("map").innerHTML = `${async function(){
  src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aadbda537b710d514162e422b0af8f57c31242b18182b7b9f4bf3b408b0b6a6a2&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
}}`;*/
