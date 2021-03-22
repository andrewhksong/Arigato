// Initialize and add the map
function initMap() {
    // The location of Gold-River
    const goldRiver = { lat: 38.6258848, lng: -121.2636649 };
    // The map, centered at Gold-River
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: goldRiver,
    });
    // The marker
    const marker = new google.maps.Marker({
        position: goldRiver,
        map: map
    });
    // Zoom event listener
    marker.addListener("click", () => {
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
}