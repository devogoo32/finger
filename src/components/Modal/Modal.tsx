import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

type ModalProps = {
  setIsModalOpen: (arg: boolean) => void;
};

function Modal({ setIsModalOpen }: ModalProps) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div onClick={handleClose}>
        <FontAwesomeIcon className="modal__icon" icon={faXmark} size="xl" />
      </div>
      <h2 className="modal__title">Get started</h2>
      <p className="modal__prompt">
        Welcome to the fictional world! Even in a world of fantasy, love is
        still in the air. That's where "Finger" comes in, the most popular
        dating app for fictional characters. Swipe your way through the most
        imaginative and exciting profiles to find your perfect match.
      </p>
    </div>
  );
}

export default Modal;
