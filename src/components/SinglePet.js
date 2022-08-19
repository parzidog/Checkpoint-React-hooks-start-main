import React from 'react';

function SinglePet(props) {

  const [adopted,setAdopted]=React.useState(false);

  return (
    <div className={adopted ? "notAdopted": "adopted"} onClick={()=>setAdopted(!adopted)}>
      <h3>{props.data.name}</h3>
      <h5>{props.data.species}</h5>
      <p>{props.data.description}</p>
                {adopted ? "Has been adopted!": "Needs to be adopted!"}
    </div>
  );
}

export default SinglePet;
