import Modal from 'react-modal';
import css from "./Modal.module.css";

Modal.setAppElement('#root');

export const ModalWin = ({ isModalOpen, largeImageURL, tags, isModalClose }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={isModalClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img src={largeImageURL} alt={tags} />
    </Modal>
  );
};
