//error type
export type TErrorData = {
  success: boolean;
  massage: string;
  errorMessage: string;
  errorDetails: null;
  stack: null;
};
export type TArticle ={
  source: TSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type TSource ={
  id: string;
  name: string;
}
export interface ISource {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}