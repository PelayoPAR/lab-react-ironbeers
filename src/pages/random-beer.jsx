import React from "react";
import Header from "../components/header";

function RandomBeer({ beerData, isLoading, isError }) {
  // console.log(beerData);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
        <h3>Fetching data. Please wait...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
        <h3>An error occured, please refresh the page.</h3>
      </div>
    );
  }

  if (!isLoading) {
    // setTimeout(() => {}, 1000);

    const randomIndex = Math.floor(Math.random() * beerData.length);
    console.log(randomIndex);
    const randomBeerData = beerData[randomIndex];
    console.log(randomBeerData);

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="beerImg">
          <img src={randomBeerData.image_url} alt="yummy beer"></img>
        </div>
        <div className="beerDescription">
          <h2>{randomBeerData.name}</h2>
          <p>{randomBeerData.attenuation_level}</p>
          <p>{randomBeerData.tagline}</p>
          <p>{randomBeerData.first_brewed}</p>
          <p>{randomBeerData.description}</p>
          <p>{randomBeerData.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
