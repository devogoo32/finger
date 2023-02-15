import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import "./Home.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar setIsModalOpen={setIsModalOpen} />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="finger-button" onClick={handleClick}>
          Let's Play
        </button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </div>
    </>
  );
}

export default Home;
