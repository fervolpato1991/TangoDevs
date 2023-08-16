import React from "react"; 
import  BallCanvas  from "../Canvas/Ball.jsx";
import { tools } from "../../Extra/index.js";
import './Tech.scss';

const Tech = () => {
  
  return (
    <>
    <div className='contenedordetools'>
      {tools.map((tool) => (
        <div className='tool' key={tool.name}>
          <BallCanvas icon={tool.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Tech