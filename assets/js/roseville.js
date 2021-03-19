// Initialize and add the map
function initMap() {
    // The location of Roseville
    const roseville = { lat: 38.7704917, lng: -121.2658656 };
    // The map, centered at Roseville
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: roseville,
    });
    // The marker
    const marker = new google.maps.Marker({
        position: roseville,
        map: map
    });
    // Zoom event listener
    marker.addListener("click", () => {
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
}