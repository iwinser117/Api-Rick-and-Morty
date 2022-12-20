import React,{useState} from "react";
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom";

const TargetLocation = ({dat}) => {
  
  /* const { name, id, type} = dat; */
  return (
    <div className='modal-dialog text-center border border-1 rounded-circle trg-location'>
            <div className=''>
            <p>Nombre : {dat.name}</p>
            <p>tipo:  {dat.type}</p>
            <p>Dimension:  {dat.dimension}</p>
            <NavLink > Detalles</NavLink>
            </div>
        
        </div>
  );
};

export default TargetLocation;
