import { useEffect, useState } from "react";





export default function RandomColor(){
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomColor(){
        if(typeOfColor === 'hex'){
            //hex number
            const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
            let hexColor = '#';
            for(let i =0; i<6; i++){
                hexColor += hex[randomColorUtility(hex.length)];
            }

            setColor(hexColor);
            console.log(hexColor);
        }else{
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);
            const rbgColor = `rgb(${r},${g},${b})`;
            console.log(rbgColor);
            setColor(rbgColor)
        }
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomColor();
        else handleCreateRandomColor();

    },[typeOfColor])

    return (
        <div style={{
            width: "100vw",
            height: '100vh',
            background: color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
        >
            <div>
                <button onClick ={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick ={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick ={handleCreateRandomColor}>Generate Random Color </button>
            </div>

            <div style ={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor ==='rgb'? 'RGB Color': "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}