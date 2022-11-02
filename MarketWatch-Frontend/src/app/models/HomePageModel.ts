import { Article } from "./news-models/Article";
import { Stock } from "./stock-models/Stock";

export class HomePageModel{
    news!: Article[];
    trendingStocks!: Stock[];
    topGainers!: Stock[];
    topLosers!: Stock[];
    allStocks!: Stock[];
}