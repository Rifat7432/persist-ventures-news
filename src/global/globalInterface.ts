//error type
export type TErrorData = {
  errors:string[]
};
//news type
export type TArticle = {
  title: string
  description: string
  content: string
  url: string
  image: string
  publishedAt: string
  source: TSource
};
// news of article source
export type TSource = {
  name: string
  url: string
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
