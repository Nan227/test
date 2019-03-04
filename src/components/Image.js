import React from 'react';
const Image = (props)=>
<img src={props.src} alt={props.id}
className='img-thumbnail clickable-images' onClick={()=>
props.pickImg(props.id)}/>

export default Image;