// import React from 'react';
import { useEffect, useState } from "react";

const Songs = () => {
    const [songs, setSongs] = useState([]);

    // Read
    const fetchSongs = async () => {
        try {
        const response = await fetch('http://bitingrent-backend.herokuapp.com/songs');
        const data = await response.json();
        setSongs(data);
        } catch(error) {
        console.error(error); // {msg: error.message} ??
        }
    }

    // Delete
    const deleteSong = async (id) => {
        try {
        const response = await fetch(`http://bitingrent-backend.herokuapp.com/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        const filteredSongs = songs.filter(song => song._id !== data._id);
        setSongs(filteredSongs);
        } catch(error) {
        console.error(error);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    return(
        <div>
            <h1 className="songs-header">Songs</h1>
            <div className="indexSongs">
                {
                    songs.map(song => {
                    return(
                        <div 
                        className="indexSingleSong" 
                        // key={song._id}
                        >
                            <p className="indexSongTitle">{song.title}</p>
                            <p  className="indexSongFirstLine"
                                // onClick={this.toggle}
                            >
                                {song.firstLine}
                            </p>
                            <div className="indexSongLyrics">
                                {
                                    song.lyrics.map(lyric => {
                                        return(
                                            <p className="indexSingleLyric">{lyric === "" ? <br/> : lyric}</p>
                                        )
                                    })
                                }
                            </div>

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
        </div>
    )
}

export default Songs;