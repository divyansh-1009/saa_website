"use client";
import axios from "axios";
import { json } from "d3-fetch";
import { useEffect, useRef, useState, useMemo } from "react";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";

export default function Alumni_Map() {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [arcs, setArcs] = useState([]);
  const globeRef = useRef();
  const tooltipRef = useRef();

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  // Fetch alumni data
  useEffect(() => {
    axios
      .get("/api/alumni_data")
      .then((res) => {
        console.log(res.data)
        setData(res.data);
        const arcData = res.data.map((alumni) => ({
          city: alumni.city,
          startLat: 26.4708,
          startLng: 73.1169,
          endLat: alumni.lat,
          endLng: alumni.lng,
        }));
        setArcs(arcData);
      })
      .catch((err) => {
        console.error("Cannot Fetch Details", err);
      });
  }, []);

  // Group alumni by same city
  const [sameCity, cityPoints] = useMemo(() => {
    const group = {};
    data.forEach((alumni) => {
      const key = `${alumni.lat}_${alumni.lng}`;
      if (!group[key]) {
        group[key] = {
          city: alumni.city,
          lat: alumni.lat,
          lng: alumni.lng,
          alumni: [],
        };
      }
      group[key].alumni.push(alumni.label);
    });
    return [group, Object.values(group)];
  }, [data]);

  // Auto-rotate globe
  useEffect(() => {
    if (!globeRef.current?.controls()) return;
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.6;
  }, []);

  // Focus on IITJ initially
  useEffect(() => {
    const timeout = setTimeout(() => {
      globeRef.current?.pointOfView(
        { lat: 26.4708, lng: 73.1169, altitude: 2.5 },
        1500
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Load country borders
  useEffect(() => {
    json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json").then(
      (topology) => {
        const geojson = topojson.feature(
          topology,
          topology.objects.countries
        );
        setCountries(geojson.features);
      }
    );
  }, []);

  // Color logic
  const getColorGradient = (count) => {
    if (count <= 2) return ["#ffcccc", "#ff9999"];
    if (count <= 4) return ["#ff9999", "#ff4d4d"];
    if (count <= 6) return ["#ff4d4d", "#e60000"];
    return ["#ff0000", "#990000"];
  };

  const getRingColor = (count) => {
    if (count <= 2) return "#ffcccc";
    if (count <= 4) return "#ff9999";
    if (count <= 6) return "#ff4d4d";
    return "#ff0000";
  };

  return (
    <div id="Globe" className="min-h-[100vh] bg-black relative">
      {/* Alumni Details Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute hidden z-[1000] max-w-[400px] text-sm leading-snug px-3 py-2 rounded-md shadow-lg bg-[rgba(30,30,30,0.9)] text-[#f0f0f0] pointer-events-none backdrop-blur-sm border border-white/10 transition-opacity duration-200 tracking-wider"
      ></div>

      <Globe
        ref={globeRef}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
        htmlElementsData={cityPoints}
        htmlElement={(d) => {
          const element = document.createElement("div");
          element.innerHTML = markerSvg;
          element.className =
            "w-[15px] text-red-500 drop-shadow cursor-pointer transition-opacity duration-200 pointer-events-auto";

          const tooltip = tooltipRef.current;

          element.addEventListener("mouseenter", () => {
            tooltip.classList.remove("hidden");
            tooltip.innerText = `Alumni in ${d.city}:\u000A${d.alumni.join(
              "\u000A"
            )}`;
          });

          element.addEventListener("mousemove", (e) => {
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY + 10}px`;
          });

          element.addEventListener("mouseleave", () => {
            tooltip.classList.add("hidden");
          });

          return element;
        }}
        htmlElementVisibilityModifier={(element, isVisible) =>
          (element.style.opacity = isVisible ? 1 : 0)
        }
        arcsData={arcs}
        arcStartLat={(d) => d.startLat}
        arcStartLng={(d) => d.startLng}
        arcEndLat={(d) => d.endLat}
        arcEndLng={(d) => d.endLng}
        arcColor={(d) =>
          getColorGradient(
            sameCity[`${d.endLat}_${d.endLng}`]?.alumni.length || 1
          )
        }
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={0.6}
        arcLabel={(d) => d.city}
        polygonsData={countries}
        polygonCapColor={"rgba(255, 255, 255, 0)"}
        polygonSideColor={"rgba(255, 255, 255, 0.03)"}
        polygonStrokeColor={"#ff0000"}
        polygonStrokeWidth={0.5}
        ringsData={cityPoints}
        ringMaxRadius={(d) => Math.min(1 + d.alumni.length * 0.2, 3)}
        ringResolution={64}
        ringPropagationSpeed={1.5}
        ringRepeatPeriod={1000}
        ringColor={(d) => getRingColor(d.alumni.length)}
      />
    </div>
  );
}
