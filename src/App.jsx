import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

 const appRouter=createBrowserRouter([
    {
     path:'/',
     element:<Body/>,
     children:[
      {
       path:'/',
       element:<MainContainer/>    
      },
      {
       path:'watch',
       element:<WatchPage/>    
      }
     ]
}])
function App() {
    const darkMode=useSelector(store=>store.app.darkmode);
    console.log(darkMode);

  return (
    
    <>
    <div className={darkMode ? "dark" : ""}>
        <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <Header/>
        <RouterProvider router={appRouter}/>
        {
          /*
          - Header
          - Body
            - side Bar
            - Main container
              - button list
              - Videos list
                 - Video Card  
          */
        }
    </div>
    </div>
    </>
  
  )
}

export default App
