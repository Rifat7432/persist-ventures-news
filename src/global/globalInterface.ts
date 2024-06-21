//error type
export type TErrorData = {
  status: string;
  code: string;
  message: string;
};
//news type
export type TArticle = {
  source: TSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
// news of article source
export type TSource = {
  id: string;
  name: string;
};
// news source
export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
