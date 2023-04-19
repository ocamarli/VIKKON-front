import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './splash.scss'; // importa la hoja de estilo SASS

const SplashPage = () => {

  return (
    <div className="text-effect"> {/* utiliza className en lugar de class para asignar estilos en React */}
      <h1 className="neon" data-text="VIKKON" >VIKKON</h1> {/* utiliza className en lugar de class */}
      <div className="gradient"></div> {/* utiliza className en lugar de class */}
      <div className="spotlight"></div> {/* utiliza className en lugar de class */}
    </div>
  );
};

export default SplashPage;