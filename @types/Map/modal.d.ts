export interface GeoJSONData {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

interface GeoJSONFeature {
  type: string;
  properties: {
    id: number;
    name: string;
    setor: string;
    zona: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
    a;
  };
}

export interface MapProps {
  center: [number, number];
  handlePopulation: Dispatch<object>;
}
