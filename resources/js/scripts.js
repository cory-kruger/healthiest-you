$(document).ready(function() {
    
    var navWaypoint = new Waypoint({
        element: document.getElementById('what-we-do'),
        handler: function(direction) {
            var nav = document.getElementById('nav');
            if (direction == "down") {
                nav.classList.add('sticky-nav');
            } else {
                nav.classList.remove('sticky-nav');
            }
        }
    }, {offset: '60px'});

    var map = new GMaps({
        div: '.map',
        lat: 44.296449,
        lng: -78.575852
    });
    map.addMarker({
        lat: 44.296449,
        lng: -78.575852,
        title: 'Healthiest-You',
        infoWindow: {
            content: '<p>10 Sarah Cres.</p>'
        }
    });
});
