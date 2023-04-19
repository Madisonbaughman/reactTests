// Create a page with 2 large squares next to each other. 200x200. 
// Make the background of the left one yellow, the right one red. 
// If you click on either, the colors flip, so left becomes red and right becomes yellow.


import {useState} from 'react';

const Project2 = () => {
    const [toggle, setToggle] = useState(true)
    let changeColor1;
    let changeColor2;
    if (toggle){
        changeColor1 = 'red';
        changeColor2 = 'yellow' ;
    } else {
        changeColor1 = 'yellow';
        changeColor2 = 'red' ;
    } 

    const clickIt = () => {
        setToggle(!toggle)
    }

    return (
        <div style={{display:'flex'}}>
            <div style={{height: '200px', width: '200px', backgroundColor: changeColor1, margin: '10px'}}
            onClick={clickIt}>

            </div>
            <div style={{height: '200px', width: '200px', backgroundColor: changeColor2, margin: '10px'}}
            onClick={clickIt}>

            </div>
        </div>
    )
}

export default Project2;