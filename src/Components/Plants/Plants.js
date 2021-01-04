// // import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import SinglePlant from '../SinglePlant/SinglePlant';

const Plants = () => {
    const [plants, setPlants] = useState([]);

  // Read
    const fetchPlants = async () => {
        try {
            const response = await fetch('http://bitingrent-backend.herokuapp.com/plants');
            // const response = await fetch('/plants');
            const data = await response.json();
            setPlants(data);
        } catch(error) {
            console.error(error); // {msg: error.message} ??
        }
    }

    // Delete
    const deletePlant = async (id) => {
        try {
        const response = await fetch(`http://bitingrent-backend.herokuapp.com/plants/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        const filteredPlants = plants.filter(plant => plant._id !== data._id);
        setPlants(filteredPlants);
        } catch(error) {
        console.error(error);
        }
    }

    useEffect(() => {
        fetchPlants();
    }, []);
    
    // useEffect(() => {
    //     fetchPlants();
    // }, [plants]);

    // console.log("fart");
    return(
        <div>
            <h1>Plants</h1>
            <div className="indexPlants">
                {
                    plants.map(plant => {
                    return(
                        <div className="indexSinglePlant" key={plant._id}>
                            <Link   
                                    className="App-link" 
                                    name={plant.name}
                                    id={plant._id}
                                    to={`/plants/${plant._id}`}>
                                {/* <p className="indexPlantNickname">{plant.nickname}, the {plant.color} </p> */}
                                <p className="indexPlantName">{plant.name}</p>
                                <img className="indexPlantImg" src={plant.img}/>
                            </Link>

                            {/* <button onClick={
                                (event) => {
                                deletePlant(plant._id);
                                }
                            }>Delete {plant.name}</button> */}
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Plants;