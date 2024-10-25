import { FC } from "react";
import { ImageResults } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImagesProps {
  images: ImageResults[];
  openModal: (imageSource: ImageResults) => void;
}

const ImageGallery: FC<ImagesProps> = ({ images, openModal }) => {
  return (
    <ul className={css.ul}>
      {images.map((item: ImageResults) => (
        <li key={item.id} className={css.li}>
          <ImageCard
            description={item.alt_description}
            urlSmall={item.urls.small}
            openModal={() => openModal(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
