//single selection
//multiple selection
import { useState } from 'react';
import data from "./data";
import "./styles.css";

export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultipSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
       console.log(getCurrentId);
       //to open and close the answer when selected the same item
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIdnexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        // Add only if it's not in the array, else get rid of it from the array.
        if(findIdnexOfCurrentId === -1){
            copyMultiple.push(getCurrentId);
        }else{
            copyMultiple.splice(findIdnexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }   

    return (
    <div className='wrapper'>
        {/* toggle effect */}
        <button onClick ={()=>setEnableMultiSelection(!enableMultipSelection)} >{
        enableMultipSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
        <div className='accordian'>
            {
                //For real life cases where we are using API rather than dummy data, we need to verify that data exist and there is at least one dataItem
                data && data.length > 0 ? (
                data.map((dataItem) => (
                <div className='item'>
                    <div onClick ={ enableMultipSelection 
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ||
                        multiple.indexOf(dataItem.id) !== -1 ? 
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