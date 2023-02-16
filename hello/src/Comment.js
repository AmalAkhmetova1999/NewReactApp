import React from 'react';
  
  
  export const Comment=[ 
        {author: "John",
         title:"GOOD",
         content:"<This cream is very good! Removed all inflammation in 3 weeks!>",
         likes:"likes:309",
         time: new Date().getHours()+ ':' + (new Date().getMinutes()-20)},
         {author: "Mary",
         title:"STRANGE",
         content:"<The cream is strange, caused peeling of the skin, did not fit.>",
         likes:"likes:20",
         time: new Date().getHours()+ ':' + (new Date().getMinutes()-15)},
         {author: "Kate",
         title:"VERY GOOD",
         content:"<Very cool cream! Bought 3 more jars!>",
         likes:"likes:215",
         time: new Date().getHours()+ ':' + (new Date().getMinutes()-10)},
         {author: "Ross",
         title:"BAD",
         content:"<The cream has a very unpleasant smell, I did not like it, I do not use it...>",
         likes:"likes:12",
         time: new Date().getHours()+ ':' + (new Date().getMinutes()-5)},
         {author: "Paul",
         title:"NICE",
         content:"<Like it. Nice soft cream.>",
         likes:"likes:180",
         time: new Date().toLocaleTimeString().slice(0,-3)},
         {author: "Jessy",
         title:"BEAUTIFUL",
         content:"<My favorite one! It's so beautiful! And I'm beautiful too!>",
         likes:"likes:267",
         time: new Date().toLocaleTimeString().slice(0,-3)}]
        

export function Reaction(props){
    return(
<div>
    <h3>{props.author}</h3>
    <p>{props.title}</p>
    <p>{props.content}</p>
    <p>{props.likes}</p>
    <p>{props.time}</p>
    </div>

    )
}

