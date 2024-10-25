import { FC } from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImageResults } from "../App/App.types";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedImage: ImageResults | null;
}

const ImageModal: FC<ModalProps> = ({ isOpen, closeModal, selectedImage }) => {
  if (!selectedImage) return null;

  const { urls, alt_description, likes, user } = selectedImage;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.container}
      overlayClassName={css.overlay}
    >
      <div className={css.imageWrapper}>
        {selectedImage && (
          <img src={urls.regular} alt={alt_description} className={css.image} />
        )}
        <div className={css.dataWrapper}>
          <p>
            Author:&nbsp;{user.name}.&nbsp;{user.location}
          </p>
          <p>{likes} 😍 </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
