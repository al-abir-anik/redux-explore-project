import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <div className="">
      <Navbar />
      <main className="max-w-7xl mx-auto px-5 my-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
