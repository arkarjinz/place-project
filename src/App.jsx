import {Route, Routes} from "react-router-dom";
import PlaceList from "./pages/PlaceList.jsx";
import PlaceDetail from "./pages/PlaceDetail.jsx";


function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<PlaceList/>}></Route>
          <Route path='/:id' element={<PlaceDetail/>}></Route>
      </Routes>
    </>
  )
}

export default App
