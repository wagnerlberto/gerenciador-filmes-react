import "./global.css";
import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Topbanner } from "./components/topbanner";
import { Topbar } from "./components/topbar";
import { Home } from "./pages/home";
import { Menu } from "./components/menu";

function App() {
  return (
    <>
      <Topbar />
      <Topbanner />
      <Mainbody>
        <Menu />
        <Home />
      </Mainbody>
      <Footer />
    </>
  );
}

export default App;
