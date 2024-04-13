export interface IAuthor {
  name: string
  avatar: string
}
export interface IComment {
  author: {
    avatar: string;
    name: string;
  };
  uploadedAt: string | number;
  content: string ;
}

export interface IBlog {
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  slug: string;
  author: {
    avatar: string;
    name: string;
  };
  uploadedAt: string;
  comments: IComment[];
}