import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMapPreview = () => {
  // Define coordinates (latitude, longitude) of your location
  const position = [26.915098, 80.943505]; // Example: San Francisco, CA

  return (
    <div className="w-full h-64 md:h-96 rounded-2xl border-x-4 border-secondary-700 overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={13} className="h-full w-full">
        {/* Tile Layer for OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker for the selected location */}
        <Marker position={position}>
          <Popup>
            <strong>RML Hostel</strong> <br />
            Jankipuram, Lucknow, UP.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GoogleMapPreview;
