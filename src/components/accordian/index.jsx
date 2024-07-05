//single selection
//multiple selection
import { useState } from 'react';
import data from "./data";
import "./styles.css";

export default function Accordian(){

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
       console.log(getCurrentId);
       //to open and close the answer when selected the same item
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    return (
    <div className='wrapper'>
        <div className='accordian'>
            {
                //For real life cases where we are using API rather than dummy data, we need to verify that data exist and there is at least one dataItem
                data && data.length > 0 ? (
                data.map((dataItem) => (
                <div className='item'>
                    <div onClick ={() => handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? 
                        (<div className='content'>
                            {dataItem.answer}
                        </div>)
                        : null
                    }
                </div>))
               ) : (
                 <div>No data found!</div>
               )}
        </div>
        
    </div>)
};