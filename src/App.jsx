import Header from "./Header/Header";
import About from "./MiddleSect/About";
import Footer from "./Footer";
import SCard from "./Card/SCard";
import ACard from "./Card/ACard";

function App() {
  
  return (
    <>
      <Header/>
      <div className="fixingdisplay">
      <SCard/> <ACard/>
      </div>
      
      <About/>
    </>
  );
}

export default App
