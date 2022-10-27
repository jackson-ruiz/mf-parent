import React from "react";

const SamplePage = () => {
  return (
    <>
      <h1>PÁGINA DE EJEMPLO</h1>
      <p>Esta es una página de ejemplo a nivel del proyecto contenedor.</p>
      <br />
      <p>
        Este es el valor de la variable de entorno
        <b> "SAMPLE_ENVIRONMENT_VARIABLE":</b>
        <br /> {process.env.SAMPLE_ENVIRONMENT_VARIABLE}
      </p>
    </>
  );
};

export default SamplePage;
