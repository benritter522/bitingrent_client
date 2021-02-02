import { useState, useEffect } from 'react';

const Home = () => {
    const [projects, setProjects] = useState([]);

    // Read
    const fetchProjects = async () => {
        try {
            const response = await fetch('http://bitingrent-backend.herokuapp.com/');
            const data = await response.json();
            setProjects(data);
        } catch(error) {
            console.error(error); // {msg: error.message} ??
        }
    }

    useEffect(() => {
        fetchProjects();
    }, [])
    return(
        <div>
            <h2>Welcome! Please, check out my projects below, or go ahead and check out my music and plants. </h2>
            <div className="indexProjects">
                {
                    projects.map((project, index) => {
                        return(
                            <div 
                                className="indexSingleProject"
                                key={index}
                            >
                                <h2 className="indexProjectTitle">{project.title}</h2>
                                <img src={project.image} alt={`Project ${project.title}`} className="indexProjectImg"/>
                                {
                                    project.links.map((projectLink, index) => {
                                        return(
                                            <a href="projectLink">Check it out!</a>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;