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