import "./style.css"
import {FaQuestion} from "react-icons/fa"
const Card = (props) => {
    return(
      <div className="cards">
          <div className="badge">Save 10%</div>
         <div className="card">
            <h4>{props.plan}</h4>
            <p>Auto renew cancel at anytime <FaQuestion /></p>
          <div className="card-body">
           <h1>₵{props.price}</h1>
         </div>
         <div className="card-footer">

         </div>
         </div>
      </div>
    )
}


export default Card;