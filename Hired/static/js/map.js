function InitMap(){

	  var center = new google.maps.LatLng(-34.5854963,-58.4358516);
	  var image = 'images/map-pin.png';

	  // Agregar puntos del mapa aqui
	  var latlng = [
	  	[-34.5854963,-58.4358516],
	  	[-34.5849948,-58.4371888]
	  ];

	  var mapOptions = {
	    zoom: 17,
	    center: center,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    panControl: false,
	    zoomControl: false,
	    scaleControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		overviewMapControl: false
	  }

	  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	  var points = [], markers = [];

	  $.each(latlng, function(idx, ll){

		  var point = new google.maps.LatLng(ll[0], ll[1]);

		  var marker = new google.maps.Marker({
		      position: point,
		      map: map,
		      icon: image
		  });

		  markers.push(marker);
		  points.push(point);
	  });
}

$(document).ready(function(){
	google.maps.event.addDomListener(window, "load", InitMap);
});
