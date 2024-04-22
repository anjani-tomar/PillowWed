
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />{" "}
        <Route
          path="/explore"
          element={
            <>
              <Explore />
            </>
          }
        />{" "}
        <Route
          path="/Add"
          element={
            <>
              <Add/>
            </>
          }
        />
      </Routes>{" "}
    </div>
  );
}

export default App;
