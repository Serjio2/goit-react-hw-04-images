import Modal from 'react-modal';
import css from "./Modal.module.css";

Modal.setAppElement('#root');

export const ModalWin = ({ isModalOpen, imgModal, isModalClose }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={isModalClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img src={imgModal.largeImageURL} alt={imgModal.tags} />
    </Modal>
  );
};
