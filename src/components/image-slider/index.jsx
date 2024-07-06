import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css'



export default function ImageSlider({url, limit = 5, page = 1}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    //any API work requires loading stage
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data);
                setLoading(false);

            }

        }catch(e){
            //always set error message
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1)
    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide +1)
    }
    

    useEffect(()=> {
        if( url !==  '' ){
            fetchImages(url);
        }

    }, [url]);
    console.log(images);

    if(loading){
        return <div>Loading Data...Please Wait!</div>
    }

    if(errorMsg !== null){
        return <div>Error Occured! {errorMsg}</div>
    }

    return <div className="background">
            <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length > 0 ?
                images.map((image, index)=>
                    <img 
                        key = {image.id}
                        alt = {image.download_url}
                        src = {image.download_url}
                        className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                )
                : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length ?
                    images.map((_,index) => 
                        <button
                            key = {index}
                            className={currentSlide === index ? 'current-indicator': 'current-indicator inactive-indicator'} 
                            onClick = {()=> setCurrentSlide(index)}                   
                        ></button>
                    )
                    : null
                }

            </span>

        </div>
    </div>
};