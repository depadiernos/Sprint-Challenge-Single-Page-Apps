import React from "react";

export default function WelcomePage() {
  return (
    <section className="page-view welcome-page">
      <div>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </div>
    </section>
  );
}
