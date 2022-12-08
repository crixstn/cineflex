import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectMovie from "../Pages/SelectMovie";
import MovieSection from "../Pages/MovieSection"
import Header from "./Header"

export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<SelectMovie/>}/>
        <Route path="/MovieSection/:idMovie" element={<MovieSection/>} />
    </Routes>
   </BrowserRouter>
  );
}

