import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

// Public GeoJSON file for world map
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Example: countries to highlight
const highlightedCountries = ["India", "United States of America", "Brazil"];

export default function Map() {
  return (
    <ComposableMap projection="geoMercator">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlightedCountries.includes(
              geo.properties.name
            );
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isHighlighted ? "#ff5722" : "#b3cde0",
                    outline: "none"
                  },
                  hover: {
                    fill: isHighlighted ? "#e64a19" : "#6497b1",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#ffccbc",
                    outline: "none"
                  }
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
