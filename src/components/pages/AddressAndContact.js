import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import classes from "./AddressAndContact.module.css";

export default function ContactUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCFLgrxEeRFykz0cem3yeq8Vlv_yZQ7IYU",
  });

  if (!isLoaded) return <div>Map Loading...</div>;
  return (
    <div className={classes.componentBox}>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>CONTACT US</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.itemBox}>
        <Map />
        <div className={classes.infoBox}>
          <div className={classes.item}>
            <img src="img/AddressAndContact/address.png" alt="" />
            <h1>ADDRESS:</h1>
            <p>
              Jl. Jababeka III G Blok C17 BS, Kawasan Industri Jababeka Desa
            </p>
          </div>
          <div className={classes.item}>
            <img src="img/AddressAndContact/email.png" alt="" />
            <h1>EMAIL:</h1>
            <p>plakointech@gmail.com</p>
          </div>
          <div className={classes.item}>
            <img src="img/AddressAndContact/call.png" alt="" />
            <h1>CALL US:</h1>
            <p>+82)10-9459-6374</p>
            <p>+82)31-283-6504</p>
          </div>
          <div className={classes.item}>
            <img src="img/AddressAndContact/clock.png" alt="" />
            <h1>BUSINESS HOUR:</h1>
            <p>09:00~17:30</p>
            <p>(GMT+ 7)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: -6.287593, lng: 107.144 }), []);
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={classes.mapContainer}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
