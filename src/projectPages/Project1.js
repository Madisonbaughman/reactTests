import {useState} from 'react';
// Have an input that takes a string. Next to the input there is a button with 'clear'.
// Underneath the input have a 100x50 box with a border.
// When you type in the input, the text appears in the box with font 2rem or 24px. 
// When you click clear, the text in the input as well as in the box disappears

//Conditionally render the yellow box


let Project1 = () => {
    const [word, setWord] = useState('');
    const [toggle, setToggle] = useState(false)
    
    const onClear = () => {
        setWord(' ')
        setToggle(false)
        console.log(word)
    }

    const onInput = (e) => {
        setWord(e.target.value)
        setToggle(true)
        console.log(word)
    }
    
    return (
        <div style={{border: '10px white solid', backgroundColor: 'black', 
            padding: '10px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Project 1</h2>
            <input style={{margin: '10px'}} onChange={onInput} value={word}>
              
            </input>
            <button onClick={onClear}>
                Clear
            </button>

            {toggle && (
                <div style={{display: 'flex', flexWrap: 'wrap', height: '50px',
                width: '100px', border: '5px yellow solid', margin: '10px', overflow: 'scroll' }}>
                    {word}
                </div> )
            }      
    
        </div>
    )
}
export default Project1;