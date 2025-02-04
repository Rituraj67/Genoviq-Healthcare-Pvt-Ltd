import L from "leaflet";
import redMarker from "../assets/marker.png"; // Make sure this path is correct

const customIcon = L.icon({
  iconUrl: redMarker, // Custom marker image
  iconSize: [65, 70], // Width and height of the icon
  iconAnchor: [20, 40], // Positioning anchor
  popupAnchor: [0, -40], // Position of the popup
});

export default customIcon;
