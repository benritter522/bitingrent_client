// import React from 'react';
import { useState, useEffect } from 'react';

const SinglePlant = (props) => {
    const [singlePlant, setSinglePlant] = useState({});

    // Read
    const fetchSinglePlant = async () => {
        try {
            const response = await fetch(`http://bitingrent-backend.herokuapp.com/plants/${props.match.params.id}`);
            const data = await response.json();
            setSinglePlant(data);
        } catch(error) {
            console.error(error); // {msg: error.message} ??
        }
    }

    useEffect(() => {
        fetchSinglePlant();
        console.log('use effect running');
    }, []);


    console.log(props);
    return (
        <div>
            {/* <h1>hello plant</h1> */}
            {/* <h2>{props.routerProps}</h2> */}



            {/* <h2>{singlePlant.nickname} the</h2> */}
            <h2>{singlePlant.name}</h2>
            <h2>{singlePlant.latinName}</h2>
            <br/><br/>
            <img src={singlePlant.img} className="showPlantImg"/>
            <br/><br/>
            <h3>Origin: {singlePlant.origin}</h3>
            <h3>Description: {singlePlant.description}</h3>
            
        </div>
    )
}

export default SinglePlant;