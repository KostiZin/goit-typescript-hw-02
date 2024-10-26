import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import { TbPhotoSearch } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  setQuery: (searchValue: string) => void;
}

type Values = {
  query: string;
};

const SearchBar: FC<SearchBarProps> = ({ setQuery }) => {
  const initialValue: Values = {
    query: "",
  };

  const handleSubmit = (values: Values) => {
    values.query === ""
      ? toast.error("Oops, the search field is empty", { icon: "😱" })
      : setQuery(values.query);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.btn} type="submit">
            <TbPhotoSearch size="24" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
