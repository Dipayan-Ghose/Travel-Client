import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <div >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
