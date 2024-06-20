import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TArticle } from "../../global/globalInterface";
type TQuery = {
  language?: string;
  q?: string;
  category?: string;
  country?: string;
  sources?: string;
};
type TValue = {
  totalResults: number;
  value: TArticle[];
  newsData: TArticle | null;
  querys: TQuery;
  page: number;
  type: string;
  theme:boolean;
};
const initialState: TValue = {
  totalResults: 0,
  value: [],
  newsData: null,
  querys: {},
  page: 1,
  type: "Headline",
  theme:true
};
// product slice
export const newsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storNewsData: (state, actions: PayloadAction<TArticle[]>) => {
      state.value = actions.payload;
    },
    storANewsData: (state, actions: PayloadAction<TArticle>) => {
      state.newsData = actions.payload;
    },
    setTotalData: (state, actions: PayloadAction<{ totalResults: number }>) => {
      state.totalResults = actions.payload.totalResults;
    },
    setTheme: (state, actions: PayloadAction<boolean>) => {
      state.theme = actions.payload;
    },
    setPage: (state, actions: PayloadAction<{ page: number }>) => {
      state.page = actions.payload.page;
    },
    setType: (state, actions: PayloadAction<string>) => {
      state.type = actions.payload;
      state.querys.category = "";
      state.querys.country = "";
    },
    setQuery: (state, actions: PayloadAction<TQuery>) => {
      if (Object.keys(actions.payload)[0] === "language") {
        state.querys.language = actions.payload.language;
      }
      if (Object.keys(actions.payload)[0] === "category") {
        state.querys.category = actions.payload.category;
      }
      if (Object.keys(actions.payload)[0] === "country") {
        state.querys.country = actions.payload.country;
      }
      if (Object.keys(actions.payload)[0] === "sources") {
        state.querys.sources = actions.payload.sources;
      }
      if (Object.keys(actions.payload)[0] === "q") {
        state.querys.q = actions.payload.q;
      }
    },
  },
});
export const {
  storNewsData,
  storANewsData,
  setQuery,
  setTotalData,
  setPage,
  setType,
  setTheme
} = newsSlice.actions;
export default newsSlice.reducer;
