import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, selectedImage }) => {
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
