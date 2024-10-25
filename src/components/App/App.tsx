import { useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import { Image, ImageResults } from "./App.types";

function App() {
  const [images, setImages] = useState<ImageResults[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPage, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageResults | null>(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsError(false);

        setIsLoading(true);

        const data: Image = await fetchImages(page, query);

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

  const handleSetQuery = (searchValue: string) => {
    if (query === searchValue) {
      return;
    }

    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const openModal = (imageSource: ImageResults) => {
    setSelectedImage(imageSource);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
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
