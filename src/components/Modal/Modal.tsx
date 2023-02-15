import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  setIsModalOpen: (arg: boolean) => void;
};

function Modal({ setIsModalOpen }: ModalProps) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}

export default Modal;
