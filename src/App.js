import "./App.css";
import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Screens/Home/Home"));
const DashBoard = React.lazy(() => import("./Screens/DashBoard/DashBoard"));
function App() {
  return (
    <div>
      <HashRouter>
        <Suspense>
          <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
          {/* <Route exact path="/dashboard" name="Dashboard" element={<DashBoard />} /> */}
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
