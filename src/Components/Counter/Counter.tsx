import React, {useState} from 'react';

const Counter = () => {

    const [currentN, setCurrentN] = useState('0')
    const [state, setState] = useState(0)


    let n = 0;

    const OnChange = (value:number) => {
        setState(prev=>prev+value)
    }

    return (
        <div>
            <div>
                <input type="text"
                value={currentN}
                onChange={(e)=>setCurrentN(e.target.value)}
                />
            </div>
            <div>
                {state}
            </div>
            <div>
                <button onClick={()=>OnChange(1)}>+1</button>
                <button onClick={()=>OnChange(-1)}>-1</button>
                <button onClick={()=>OnChange(+50)}>+50</button>
                <button onClick={()=>OnChange(+100)}>+100</button>
            </div>
        </div>
    );
};

export default Counter;