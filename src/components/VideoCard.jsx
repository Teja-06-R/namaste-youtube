import React from 'react'

const VideoCard = (props) => {
    const {info}=props;
    const {snippet,statistics}=info;
    const {thumbnails,channelTitle,title}=snippet;

  return (
    <div className='p-2 m-2 shadow-lg w-80'>
        <img alt="thumbnail" src={thumbnails.medium.url} 
        className='rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount/1000}K Views</li>
        </ul>
    </div>
  )
}

export default VideoCard