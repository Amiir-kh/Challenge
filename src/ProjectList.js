import { CardImg } from "react-bootstrap";
import Cardi from "./Cardi";

const style={display:"flex", justifyContent:"space-around", alignItems:"center" }
const ProjectList=({projects})=>{
    return(
        <div style={style}>
        {projects.map((el) => <Cardi pro={el} />)}
        </div>
    )

};

export default ProjectList;