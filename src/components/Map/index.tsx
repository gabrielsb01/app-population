import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { getGeometriasBairros } from "../../services/api";
import { GeoJSONData, MapProps } from "@/Map/modal";

export const MapComponent = ({ center, handlePopulation }: MapProps) => {
  const [loading, setLoading] = useState(true);
  const [bairrosGeoJSON, setBairrosGeoJSON] = useState<GeoJSONData | null>(
    null
  );

  const handleBairroClick = (e: L.LeafletMouseEvent) => {
    handlePopulation(e.target.feature.properties);
  };

  const fetchBairrosGeoJSON = useMemo(
    () => async () => {
      const result = await getGeometriasBairros();
      setBairrosGeoJSON(result);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchBairrosGeoJSON();
  }, [fetchBairrosGeoJSON]);

  if (loading || !bairrosGeoJSON) return "Loading...";

  return (
    <MapContainer center={center} zoom={14} className="w-full h-screen">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON
        data={bairrosGeoJSON}
        onEachFeature={(feature, layer) => {
          layer
            .on({
              click: handleBairroClick,
            })
            .bindTooltip(feature.properties.name);
        }}
      />
    </MapContainer>
  );
};
