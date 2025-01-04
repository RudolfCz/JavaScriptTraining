"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    
    if (!res.ok) throw new Error("Problem getting country");

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
console.log("FIRST");