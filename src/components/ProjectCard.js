import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl ,link}) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-imgbx">
      
        <img src={imgUrl} width='50' height='50' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <form action={link}>
      <button class="button" ><span>Click </span></button>
      </form>
         
        </div>
      </div>

      
    </Col>
  )
}
