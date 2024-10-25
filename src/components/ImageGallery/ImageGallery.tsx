import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.ul}>
      {images.map((item) => (
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
