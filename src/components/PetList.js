import React from 'react';
import SinglePet from './SinglePet';
import Pets from '../petdata';

function PetList() {

  return (
      <div className="pet-list">
        {Pets.map(pet=>{
          return <SinglePet key={pet.id} data={pet} pet={pet.name}/>
          })
        }
      </div>
  )
}

export default PetList;
