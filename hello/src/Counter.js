import React, {
    useState
} from 'react';

function Counter() {
   const [count, setCount] = useState(0);
    const newCounter = () => {
            setCount(count + 1)}
            return ( <div class="counter"><button class="button"onClick={newCounter}> ADD </button>
            <div>{count}</div>
            </div>)}

export default Counter
