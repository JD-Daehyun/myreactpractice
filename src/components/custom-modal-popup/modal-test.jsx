import { useState } from "react"
import Modal from "./modal";
import './modal.css'


export default function ModalTest(){
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }
    
    return <div className="modal-test">

        <button className="modal-button" onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
         showModalPopup && <Modal 
         id={'jd-id'}
         onClose= {onClose}
         header={<h1>JD PopUP</h1>}
         body={<div>My Customized Body</div>}
         footer={<h3>GOOD</h3>}
         
         />
        }
    </div>
}