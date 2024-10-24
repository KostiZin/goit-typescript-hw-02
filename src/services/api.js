import axios from "axios";

export const fetchImages = async (page = 1, query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12&orientation=landscape&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww`
  );

  return data;
};
