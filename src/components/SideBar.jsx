import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  //Early Return
  if(!isMenuOpen) return null;

  return (
    <div className='pt-26 px-4 left-0'>
     
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
       <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul  className='pt-5'>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Downloads</li>
      </ul>
    </div>
  )
}

export default SideBar

// fixed top-16 left-0 overflow-y-auto p-5 shadow-lg w-48