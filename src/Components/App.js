import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectMovie from "../Pages/SelectMovie";
import MovieSection from "../Pages/MovieSection"
import MovieSeats from "../Pages/MovieSeats";
import Header from "./Header"
import Finish from "../Pages/Finish";

export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<SelectMovie/>}/>
        <Route path="/MovieSection/:idMovie" element={<MovieSection/>} />
        <Route path="/MovieSeats/:idSection" element={<MovieSeats/>} />
        <Route path="/Finish" element={<Finish/>} />
    </Routes>
   </BrowserRouter>
  );
}

