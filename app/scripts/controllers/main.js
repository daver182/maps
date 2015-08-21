'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapsApp
 */
angular.module('mapsApp').controller('MainCtrl', function ($scope) {
    $scope.locations = [];

    $scope.map = {
    	center: {
    		latitude: -33.4,
    		longitude:  -70.65
    	},
    	zoom: 12,
    	options: { scrollwheel: false }
    };
    $scope.marker = {
    	id: Date.now(),
		options: { draggable: true },
		events: { dragend: draggedMarker }
	};

    $scope.search = {
    	template: 'views/search.html',
    	events: { place_changed: placeChanged },
    	parent: 'search',
    	options: {
    		autocomplete: true
    	}
    };

    $scope.save = function(){
    	if(!$scope.lastLocation || !$scope.lastLocation.coords) { return alert('Debe buscar una ubicación primero'); }

    	$scope.locations.push({
    		id: Date.now(),
    		latitude: $scope.lastLocation.coords.latitude,
    		longitude: $scope.lastLocation.coords.longitude,
    		address: $scope.lastLocation.address
    	});

    	$scope.marker = {
            id: Date.now(),
            options: { draggable: true },
            events: { dragend: draggedMarker }
        };
        $scope.lastLocation = {};
    }

    $scope.show = function(location){
    	$scope.map.center = {
    		latitude: location.latitude,
    		longitude: location.longitude,
    	};
    }

    $scope.delete = function(index){
        if(confirm('¿Está seguro de borrar esta ubicación?')){
            $scope.locations.splice(index, 1);
        }
    }

    function draggedMarker (marker, eventName, args) {
        console.log('draggedMarker');
    	var geocoder = new google.maps.Geocoder();
    	var latitude = marker.getPosition().lat();
		var longitude = marker.getPosition().lng();

    	var latlng = { lat: latitude, lng: longitude };
    	geocoder.geocode({ 'location': latlng }, function(results, status) {
    		if (status === google.maps.GeocoderStatus.OK) {
    			if (results[1]) {
    				$scope.lastLocation = {
    					coords: {
    						latitude: latitude,
							longitude: longitude
    					},
						address: results[1].formatted_address
					}
    			}else {
					console.error('No se encontró la dirección');
				}
    		} else {
				console.error('Geocoder ha fallado. Error: ' + status);
			}
    	});
	}

	function placeChanged (autocomplete) {
		var location = autocomplete.getPlace().geometry.location;

		if(!location) return;

		var coords = {
			latitude: location.k,
			longitude: location.D
		}

		$scope.map.center = coords;
		$scope.marker.coords = coords;

		$scope.lastLocation = {
			coords: coords,
			address: autocomplete.getPlace().formatted_address
		}
	}
});