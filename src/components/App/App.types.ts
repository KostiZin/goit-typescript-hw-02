export interface Image {
  results: ImageResults[];
  total: number;
  total_pages: number;
}

export interface ImageResults {
  id: string;
  alt_description: string;
  description: string;
  likes: number;
  urls: {
    full: string;
    small: string;
    regular: string;
  };
  user: {
    name: string | null;
    location: string | null;
  };
}
