import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/Signup';
import OldCar from './Pages/OldCars/Oldcars';
import NewCar from'./Pages/NewCar/NewCar';
import NewBike from'./Pages/NewBike/NewBIke';
import OldBike from'./Pages/OldBike/OldBike';
import Details from'./Pages/Details/Details';
import Newcardetails from'./Pages/NewCarDetails/NewCarDetails'
import Oldbikedetails from'./Pages/OldBikeDetails/OldBikeDetails'
import Oldcardetails from'./Pages/OldCar Details/oldcardetails'
import SIGNUP from'./Components/SignUp/signup'
import LOGIN from'./Components/Login/login'


// function App() {

//   return (
//     <div className="App">

      
//           </div>
//   );s
// }

// export default App;




const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SIGNUP />} />
        <Route path="/home" element={<Home />} />
<Route path="/loginc" element={<LOGIN/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-car" element={<NewCar/>} />
        <Route path="/used-car" element={<OldCar />} />
        <Route path="/new-bike" element={<NewBike />} />
        <Route path="/used-bike" element={<OldBike />} />
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/oldbikedetails/:id" element={<Oldbikedetails/>}/> 
        <Route path="/oldcardetails/:id" element={<Oldcardetails/>}/> 
        <Route path="/newcardetails/:id" element={<Newcardetails/>}/> 


      </Routes>
    </Router>
    </>
  );
};

export default App;