// import React from 'react';
import { useEffect, useState } from "react";

// const SERVERURL = process.env.SERVER_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);

    // Read
    const fetchSongs = async () => {
        try {
        const response = await fetch('http://bitingrent-backend.herokuapp.com/songs');
        // const response = await fetch(`${SERVERURL}/songs`);
        const data = await response.json();
        setSongs(data);
        } catch(error) {
        console.error(error); // {msg: error.message} ??
        }
    }

    // // Delete
    // const deleteSong = async (id) => {
    //     try {
    //     const response = await fetch(`http://bitingrent-backend.herokuapp.com/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //         'Content-type': 'application/json'
    //         }
    //     });
    //     const data = await response.json();
    //     const filteredSongs = songs.filter(song => song._id !== data._id);
    //     setSongs(filteredSongs);
    //     } catch(error) {
    //     console.error(error);
    //     }
    // }

    const handleClick= (event) => {
        // only want to toggle this class for one intended piece
        if(event.target.classList.contains('indexSongTitle')) {
            event.target.classList.toggle('indexShowLyrics');
        }
        console.log(event.target);
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    return(
            <div className="indexSongs">
                {
                    songs.map(song => {
                    return(
                        <div 
                        className="indexSingleSong"
                        key={song._id}
                        onClick={handleClick}
                        >
                            <h2 className="indexSongTitle">{song.title}</h2>
                            {/* <button onClick={handleClick}>FULL LYRICS</button> */}
                            <div className="indexSongLyrics">
                                {
                                    song.lyrics.map((lyric, index) => {
                                        return(
                                            <p  className="indexSingleLyric"
                                                key={`Lyric ${index}`}
                                            >
                                                {lyric === "" ? <br/> : lyric}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <p  className="indexSongFirstLine">{song.firstLine}</p>

                            {/* <button onClick={
                                (event) => {
                                deleteSong(song._id);
                                }
                            }>Delete {song.title}</button> */}
                        </div>
                    )
                    })
                }
            </div>
    )
}

export default Songs;