import React from "react";
import Meals from "./components/Meals";
import Mealinfo from "./components/Mealinfo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/:MealId" element={<Mealinfo/>} />
      </Routes>
    </>
  );
}

export default App;
