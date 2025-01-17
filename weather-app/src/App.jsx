import "./App.css";
import MyNav from "./components/MyNav";
import WeatherHome from "./components/WeatherHome";
import CityWeather from "./components/CityWeather";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<WeatherHome />} />
        <Route path="/cityWeather/:citySearch" element={<CityWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
