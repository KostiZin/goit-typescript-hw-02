import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  addPage: () => void;
}

const LoadMoreBtn: FC<LoadMoreProps> = ({ addPage }) => {
  return (
    <>
      <button className={css.btn} onClick={addPage}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
