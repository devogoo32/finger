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
    </div>
  );
}

export default Modal;
