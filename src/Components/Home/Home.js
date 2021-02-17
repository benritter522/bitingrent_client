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
                                <h3 className="indexProjectTitle">{project.title}</h3>
                                <div className="indexProjectContents">
                                    <img className="indexProjectImg" src={project.image} alt={`Project ${project.title}`} />
                                    <div className="indexProjectText">
                                        <div className="indexProjectDescription">
                                            <h3 className="indexProjectDescriptionHeader">Description</h3>
                                            Description coming soon.
                                        </div>
                                        <div className="indexProjectLinks">
                                        <h3 className="indexProjectLinksHeader">Links</h3>
                                        {
                                            project.links.map((projectLink, indexLink) => {
                                                return(
                                                    <div>
                                                        <a 
                                                            className="App-link" 
                                                            href={projectLink.url}
                                                            key={indexLink}
                                                        >
                                                            {projectLink.label}
                                                        </a><br />
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;