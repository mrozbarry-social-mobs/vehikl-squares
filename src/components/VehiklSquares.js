import React from 'react';
import VehiklSquare from './VehiklSquare';

function VehiklSquares(){

  return(
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-3">
      {Array.from({length: 9}, (_, index) => <VehiklSquare key={index} />)}
    </div>
  ) 

}

export default VehiklSquares;


