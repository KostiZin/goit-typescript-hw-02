import css from "./ImageCard.module.css";

type Props = {
  description: string;
  urlSmall: string;
  openModal: boolean;
};

const ImageCard = ({ description, urlSmall, openModal }: Props) => {
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
