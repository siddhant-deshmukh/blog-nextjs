export interface IAuthor {
  name: string
  avatar: string
}
export interface IComment {
  author: IAuthor
  content: string
  uploadedAt: string | number
}

export interface IBlog {
  title: string
  description: string
  content: string
  author: IAuthor
  comments: IComment[]
}