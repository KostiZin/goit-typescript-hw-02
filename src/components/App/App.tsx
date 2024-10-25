import { useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsError(false);

        setIsLoading(true);

        const data = await fetchImages(page, query);

        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue) => {
    if (query === searchValue) {
      return;
    }

    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const openModal = (imageSource) => {
    setSelectedImage(imageSource);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className={css.appWrapper}>
      <div className={css.formWrapper}>
        <SearchBar setQuery={handleSetQuery} />
      </div>

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isError ||
        isLoading ||
        images.length === 0 ||
        (page < totalPage && <LoadMoreBtn addPage={handleChangePage} />)}
    </div>
  );
}

export default App;
