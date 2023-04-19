// You have data: [{title: 'one', color: 'blue'},{title: 'two', color: 'red'},
// {title: 'three', color: 'green'},{title: 'four', color: 'yellow'}]. 
// In a box, list the items in a box with some margin and padding, with the title centered and
// the background the color. If you click on one, that element disappears. Underneath the parent box, 
// you have a reset button that makes all titles reappear.


import {useState} from 'react';

const Project3 = () => {

    let firstArray = [{title: 'one', color: 'blue'},{title: 'two', color: 'red'},
    {title: 'three', color: 'green'},{title: 'four', color: 'yellow'}];

    let [myArray, setArray] = useState(
                                firstArray
                                )

    const onPress = (e) => {
         // is there a way to filter by key?
        // setState(filteredArray)
        if (e.target.tagName === 'H5'){
            console.log(e.target.innerText)

            let newArray = myArray.filter(item => item.title !== e.target.innerText)
            setArray(newArray)
        }
    }

    const reset = () => {
        setArray(firstArray)
    }

    let myBlocks = myArray.map(item => 
        <div key={item.title} style={{display:'flex', alignItems:'center', width:'50px', height:'50px', margin: '5px', backgroundColor: item.color}}>
            <h5 onClick={onPress}>{item.title}</h5>
        </div>
    )
    
    return (
        <>
            <div style={{display: 'flex', border: '1px solid white'}}>
                {myBlocks}
            </div>
            <button onClick={reset} style={{margin: '10px'}}>Reset</button>
        </>
    )
}

export default Project3;