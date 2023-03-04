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
      <div className={isModalOpen ? "home home--background" : "home"}>
        <Navbar setIsModalOpen={setIsModalOpen} />
        <div className="home__content">
          <h1 className="home__title">Swipe Right</h1>
          <button className="finger-button" onClick={handleClick}>
            Let's Play
          </button>
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        </div>
      </div>
    </>
  );
}

export default Home;
