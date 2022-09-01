import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import classes from "./Address.module.css";

export default function Address() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCFLgrxEeRFykz0cem3yeq8Vlv_yZQ7IYU",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <h1>Address</h1>
      <Map />
      <p>
        Address: Jl. Jababeka III G Blok C17 BS, Kawasan Industri Jababeka Desa
        Pasir Gombong – Cikarang Utara Bekasi
      </p>
    </div>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: -6.287593, lng: 107.144 }), []);
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={classes.container}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
