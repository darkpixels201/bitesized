import "./App.css";
import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Screens/Home/Home"));
function App() {
  return (
    <div>
      <HashRouter>
        <Suspense>
          <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
