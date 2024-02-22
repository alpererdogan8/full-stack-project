/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, Reducer, createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { API } from "../utils/axios/config";
import { reducer } from "../utils/reducers/reducer";
import type { ApiResponse, Details, InitialState, TypeAction } from "../utils/reducers/types";

interface IContextAPI {
  contextAPIState: InitialState;
  getAlbums: (page?: number) => Promise<void> | undefined;
  getSingleAlbum: (albumId: number, page?: number) => Promise<void> | undefined;
  getSingleAlbumDetails: (albumId: number, photoId: number) => Promise<void> | undefined;
  details: Details;
  handleSearch: (input: string) => void;
}

const ApiResponse: ApiResponse = {
  limit: 25,
  page: 1,
  results: [],
  totalItems: 0,
  totalPages: 0,
};

export const ContextAPI = createContext<IContextAPI>({
  contextAPIState: { data: ApiResponse, loading: true, error: "" },
  getAlbums: () => Promise.resolve() || undefined,
  getSingleAlbum: () => Promise.resolve() || undefined,
  getSingleAlbumDetails: () => Promise.resolve() || undefined,
  details: {
    albumId: 0,
    comments: [],
    id: 0,
    thumbnailUrl: "",
    title: "",
    url: "",
  },
  handleSearch: () => undefined,
});
const initialState: InitialState = {
  data: ApiResponse,
  error: null,
  loading: true,
};

export const ContextAPIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [contextAPIState, dispatch] = useReducer<Reducer<InitialState, TypeAction>>(reducer, initialState);
  const [details, setDetails] = useState<Details>({
    albumId: 0,
    comments: [],
    id: 0,
    thumbnailUrl: "",
    title: "",
    url: "",
  });

  const getAlbums = async (page?: number) => {
    try {
      dispatch({ type: "FETCH_START" });
      const { data } = await API.get(`/albums?page=${page}`);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error as string });
    }
  };
  const getSingleAlbum = async (albumId: number, page?: number) => {
    try {
      dispatch({ type: "FETCH_START" });
      const { data } = await API.get(`/albums/${albumId}?page=${page}`);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error as string });
    }
  };
  const getSingleAlbumDetails = async (albumId: number, photoId: number) => {
    try {
      const { data } = await API.get(`/albums/${albumId}/photos/${photoId}`);
      setDetails({ ...data });
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handleSearch = async (input: string) => {
    try {
      dispatch({ type: "FETCH_START" });
      const { data } = await API.get(`/search?type=albums-photos&search=${input}`);
      console.log(data);
      console.log(data.results[0].id);
      if (data.results.length > 0) {
        navigate({ pathname: `/albums/${data.results[0].id}` });
      }
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error as string });
    }
  };
  return (
    <ContextAPI.Provider
      value={{ contextAPIState, handleSearch, getAlbums, getSingleAlbum, getSingleAlbumDetails, details }}>
      {children}
    </ContextAPI.Provider>
  );
};
