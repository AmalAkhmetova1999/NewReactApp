import React, {
    useState
} from 'react';

const Input = () => {
    const [userName, setName] = useState({
        name: ""
    });
    return (
<div class="counter">
    <p>Enter your name here</p>
    <input type="text" value={userName.name} onChange={e=>{const newUserName={name:e.target.value};
setName(newUserName);
}}/>
<p>{userName.name}</p>
</div>

    )
}
export default Input