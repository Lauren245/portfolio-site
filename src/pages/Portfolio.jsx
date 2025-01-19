import Project from "../components/Project";
import projectsArr from '../components/ProjectData';

export default function Portfolio(){
    return (
        <div>
            <h1>My Portfolio</h1>
            <Project props={projectsArr}/>
        </div>
    );
}