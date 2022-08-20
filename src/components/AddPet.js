import React from "react";
import Pets from "../petdata";
import PetList from "./PetList";

const AddPet =()=>{
    const [list, setList]=React.useState(Pets);

    const [name, setName]=React.useState('')

    const [description, setDescription]=React.useState('')

    const [species, setSpecies]=React.useState('')

    const[change, setChange]=React.useState(false)

    const handleName =(event)=>{
        setName(event.target.value);
      }

    const handleDescription =(event)=>{
    setDescription(event.target.value);
    }

    const handleSpecies =(event)=>{
    setSpecies(event.target.value);
    }

    React.useEffect(()=>{
        console.log('hit')
        }, [change])

    const submit =()=>{
    let newList = list;
    const newObj={
        id: list.length+1,
        name: name,
        description: description,
        species: species
    }
    newList.push(newObj);
    setList(newList)
    setChange(!change)
    setName('');
    setDescription('');
    setSpecies('')
    console.log(list)
    }
    return (
        <>
        <PetList key='petList' data={list}/>
        <div className="addPet">
        <h3>ADD A NEW PET HERE</h3>
        <form>
            <input type='text' id="name" value={name} onChange={handleName} placeholder="Pet's Name"/>
            <input type='text' id="species" value={species} onChange={handleSpecies} placeholder="Pet's Species"/><br/>
            <input type='text' id="description" value={description} onChange={handleDescription} placeholder="Description of Pet"/>
        </form>
        <button onClick={submit}>Submit</button>
        </div>
        </>
      );
}

export default AddPet;
