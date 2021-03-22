// Initialize and add the map
function initMap() {
    // The location of Sacramento
    const sacramento = { lat: 38.595316, lng: -121.415035 };
    // The map, centered at Sacramento
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: sacramento,
    });
    // The marker
    const marker = new google.maps.Marker({
        position: sacramento,
        map: map
    });
    // Zoom event listener
    marker.addListener("click", () => {
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
}