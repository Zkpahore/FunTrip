import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const position = [51.505, -0.09]; // Example coordinates (latitude, longitude)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Location</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Visit Us</h2>
          <p className="text-gray-600">
            Our office is located in the heart of the city, providing easy access for all your travel needs.
            Come visit us to discuss your next adventure and let us help you plan the perfect trip.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Office Address</h2>
          <p className="text-gray-600">
            123 Travel Street, Adventure City, World
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Find Us on the Map</h2>
          <div className="w-full h-64">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full rounded-md">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Our Office Location <br /> 123 Travel Street.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
