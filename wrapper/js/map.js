


/*
		Global
		*/
		var map;
 
		function initialize() {
 
			/*
			Basic Setup
			*/
 
			var latLng = new google.maps.LatLng(41.99576440700279, -73.87587818918223);
 
	    	var myOptions = {
				panControl: false,
				zoomControl: false,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				overviewMapControl: false,
				draggable: true,
				disableDoubleClickZoom: true,     //disable zooming
				scrollwheel: false,
	      		zoom: 16,
	      		center: latLng,
	      		mapTypeId: google.maps.MapTypeId.ROADMAP //   ROADMAP; SATELLITE; HYBRID; TERRAIN;
			};
 
			map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
			/*
			MARKER
			*/
 
			/*
			//for custom image
			var image = 'yourflag.png';
			icon: image 
 
			//for animation marker drop
			animation: google.maps.Animation.DROP
 
			*/
			var markerlatlng = new google.maps.LatLng(41.99545343546528, -73.8778174263);
 
			var marker = new google.maps.Marker({
			    position: markerlatlng,
			    title:"Hello World!"
			});
 
			marker.setMap(map);
 
			/*
			INFO Bubble
			*/
 
			myInfoWindowOptions = {
				content: '',
				maxWidth: 275
			};
 
			infoWindow = new google.maps.InfoWindow(myInfoWindowOptions);
 
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.open(map,marker);
			});
 
			google.maps.event.addListener(marker, 'dragstart', function(){
				infoWindow.close();
			});
 
			infoWindow.open(map,marker);
 
 
		}//end initialize
 
 
		/*
		onLoad
		*/
		$(function(){
			initialize();
 
			$("#zo").click(function(event){
				event.preventDefault(); 
				map.setZoom( map.getZoom()-1 );
				//map.setCenter(new google.maps.LatLng(9.825183,15.1975769));
			});
 
			$("#zi").click(function(event){
				event.preventDefault(); 
				map.setZoom( map.getZoom()+1 );
			});
 
			$("#gt").click(function(event){
				event.preventDefault(); 
				var lt1 = new google.maps.LatLng(36.114739, -115.171840);
				//map.setZoom( 16 );
				map.panTo(lt1);
			});
 
		});