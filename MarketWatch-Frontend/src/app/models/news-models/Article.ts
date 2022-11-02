import { Source } from "./Source";

export class Article{
    source!: Source;
    author!: string;
    title!: string;
    description!: string;
    url!: string;
    urlToImage!: string;
    publishedAt!: string;
    content!: string;
}