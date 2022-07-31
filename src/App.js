import React from "react";
import Meals from "./components/Meals";
import Mealinfo from "./components/Mealinfo";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Meals />} />
          <Route path="/:MealId" element={<Mealinfo />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Subscribe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
