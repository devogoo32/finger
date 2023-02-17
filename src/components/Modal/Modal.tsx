import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import "./Modal.css";
import { Link } from "react-router-dom";

type ModalProps = {
  setIsModalOpen: (arg: boolean) => void;
};

function Modal({ setIsModalOpen }: ModalProps) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modal__icon" onClick={handleClose}>
        <FontAwesomeIcon className="icon" icon={faXmark} size="xl" />
      </div>
      <h2 className="modal__title">Get started</h2>
      <p className="modal__prompt">
        Welcome to the fictional world! Even in a world of fantasy, love is
        still in the air. That's where "Finger" comes in, the most popular
        dating app for fictional characters. Swipe your way through the most
        imaginative and exciting profiles to find your perfect match.
      </p>
      <h3>Show me: </h3>
      <RadioButtonGroup />
      <Link to="dashboard">
        <button className="finger-button modal__button">Start</button>
      </Link>
    </div>
  );
}

export default Modal;
