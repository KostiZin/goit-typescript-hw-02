import axios from "axios";

export const fetchImages = async <T>(
  page: number = 1,
  query: string
): Promise<T> => {
  const { data } = await axios.get<T>(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12&orientation=landscape&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww`
  );

  return data;
};
