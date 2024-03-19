import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features}= option
    return (
        <div className=' border-[2px] border-[#D123] text-center p-8 rounded-3xl shadow-2xl bg-green-600 text-sky-950 flex flex-col '>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span className='text-xl'>/month</span>
            </h2>
            <h1 className='text-4xl my-5'>{name}</h1>
          <div className='flex-grow'>
          {
            features.map( (feature, idx) => <Feature key={idx} feature={feature}></Feature>)
           }
          </div>

           <button className=' bg-red-700 text-white p-3 rounded-3xl my-5 '>Buy Now</button>
            
            
            
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object.isRequired
}

export default PriceOption;