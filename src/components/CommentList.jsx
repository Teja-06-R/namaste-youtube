import React from 'react'
import Comment from './Comment';

const CommentList = (props) => {
    const {data}=props;
  return data.map((d,index)=>
  <div>
    <Comment key={index} data={d}/>
    <div className='pl-5'>
       <CommentList data={d.replies}/>
    </div>
  </div>);
    
  
}

export default CommentList