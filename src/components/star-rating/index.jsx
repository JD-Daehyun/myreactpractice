import { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './styles.css';



export default function StarRating({ noOfStars = 5 }){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return <div className="star-rating">
        <h2>Star Rating : Click, Mouse Hover, and Mouse Leave</h2>
        {
            [...Array(noOfStars)].map((_,index) =>{
                // This is because index starts at 0;
                index +=1;
                return <FaStar
                key = {index}
                className= {index <= (hover || rating )? 'active' : 'inactive'}
                onClick = {()=> handleClick(index)}
                onMouseMove = {() => handleMouseEnter(index)}
                onMouseLeave = {() => handleMouseLeave()}
                size = {40}
                />
            })
        }


    </div>
};