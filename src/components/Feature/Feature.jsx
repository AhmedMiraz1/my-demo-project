
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {

    return (
        <div className="flex items-center gap-2">
            <p><FaCheckCircle /></p>
            <p>  {feature}</p>
            
        </div>
    );
};

export default Feature;