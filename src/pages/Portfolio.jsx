import Project from "../components/Project";
import projectsArr from "../utils/projectData.js";


export default function Portfolio(){
    return (
        <div className="container mx-auto">
            <h1 className="my-4">My Portfolio</h1>
            <Project projects={projectsArr}/>
        </div>
    );
}