import { Link } from "react-router-dom";

Link

function Card({title, text, link = "/", linkText = "Ver Post"}){



    return( 
   <div className="card mb-3">
  
  <div className="card-body">
    <h3 className="card-title">
        {title}
    </h3>
    <p className="card-text">{text}
    </p>
    <Link to={link} className="btn btn-dark mt-4">
       {linkText}
    </Link>
  </div>
</div>  ) 

 
}

export default Card;