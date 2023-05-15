import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Route } from "./Components/Route";

function App() {
  return (
    <div className="App bg-gradient-to-t from-[#f8fafc] to-[#E5F8FE]">
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
