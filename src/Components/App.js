import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectMovie from "../Pages/SelectMovie";
import MovieSection from "../Pages/MovieSection"
import MovieSeats from "../Pages/MovieSeats";
import Header from "./Header"

export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<SelectMovie/>}/>
        <Route path="/MovieSection/:idMovie" element={<MovieSection/>} />
        <Route path="/MovieSeats/:idSection" element={<MovieSeats/>} />
    </Routes>
   </BrowserRouter>
  );
}

