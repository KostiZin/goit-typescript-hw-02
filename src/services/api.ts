import axios from "axios";
import { ImageResults } from "../components/App/App.types";

interface ApiResponse {
  results: ImageResults[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  page: number = 1,
  query: string
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12&orientation=landscape&client_id=mS-dGrwvQX2GrdOFtnC-D27IiL42MVJH3DXgYTQJSww`
  );

  return data;
};
