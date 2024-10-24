import css from "./ImageCard.module.css";

const ImageCard = ({ description, urlSmall, openModal }) => {
  return (
    <>
      <img
        className={css.img}
        alt={description}
        src={urlSmall}
        onClick={openModal}
      />
    </>
  );
};

export default ImageCard;
