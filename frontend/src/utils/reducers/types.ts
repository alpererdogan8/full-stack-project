//State Type
export type ApiResponse = {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
  results: unknown;
};
export interface InitialState {
  data: ApiResponse;
  loading: boolean;
  error: string | null;
}

// Action Type
export type TypeAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: unknown }
  | { type: "FETCH_ERROR"; payload: string };

//Details Type
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Details {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  comments: Comment[];
}
