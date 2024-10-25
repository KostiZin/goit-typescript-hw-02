import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageResults } from "../App/App.types";

interface ImageCardProps {
  description: string;
  urlSmall: string;
  openModal: () => void;
}

const ImageCard: FC<ImageCardProps> = ({
  description,
  urlSmall,
  openModal,
}) => {
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
