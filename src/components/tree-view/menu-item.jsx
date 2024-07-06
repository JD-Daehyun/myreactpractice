import { useState } from "react"
import MenuList from "./menu-list"
import {FaMinus, FaPlus} from 'react-icons/fa'


export default function MenuItem({item}){
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentlabel) {
        setDisplayCurrentChildren({
          ...displayCurrentChildren,
          [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
        console.log(displayCurrentChildren)
      }


    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length > 0 ? 
                //check if it has children, then add a plus toggle
                <span onClick={() => handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} />
                    }
                </span> //you can pass label or any unqiue id. It will do the same job. 
                : null
            }
        </div>
       {
        item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
        //recursively calling its children by calling MenuList here
        <MenuList list={item.children} />

        : null
       }
    </li>

}