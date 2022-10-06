import { render } from '@testing-library/react';
import { useState,useRef} from 'react';



function App() {
  
    const [randomInput,setRandomInput] = useState('')
    const renders = useRef(0)

    const handlechange = (e)=>{
        setRandomInput(e.target.value)
        renders.current++
    }


    return(
        <main className='App'>
            <input
            type="text"
            value={randomInput}
            placeholder="random input"
            onChange={handlechange}
            />
            <p>renders:{renders.current}</p>
            <br></br>
            <p>{randomInput}</p>


        </main>
    )
}

export default App;