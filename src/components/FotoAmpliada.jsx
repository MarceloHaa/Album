import React from 'react'

const FotoAmpliada = ({foto, setFotoAmpliada}) => {
  return (
    <div className='fotp-ampliada-backdrop'
    onClick={() => setFotoAmpliada(null)}
    >
      <div className="foto-ampliada-container">
        <img src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  );
};

export default FotoAmpliada