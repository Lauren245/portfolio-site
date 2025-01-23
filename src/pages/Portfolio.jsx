import Project from "../components/Project";
import projectsArr from '../utils/projectData';


export default function Portfolio(){
    return (
        <div>
            <h1>My Portfolio</h1>
            <Project projects={projectsArr}/>
        </div>
    );
}