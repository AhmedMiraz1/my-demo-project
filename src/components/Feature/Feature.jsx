import PropTypes from 'prop-types'; 
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {

    return (
        <div className="flex items-center gap-2">
            <p><FaCheckCircle /></p>
            <p>  {feature}</p>
            
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.object.isRequired
}


export default Feature;