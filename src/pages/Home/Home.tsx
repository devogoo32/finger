import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log("CLICK");
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="finger-button" onClick={handleClick}>
          Let's Play
        </button>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default Home;
