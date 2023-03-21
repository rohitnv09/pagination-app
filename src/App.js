import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import UnprotectedLayout from "./layouts/UnprotectedLayout";
import Loading from "./components/Loading/Loading";
import "./App.css";

const Users = lazy(() => import("./pages/Users/Users"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<UnprotectedLayout />}>
              <Route path="/users" element={<Users />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
