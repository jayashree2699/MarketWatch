package com.team7.Miscellaneous.HomePage.service;

import com.team7.Miscellaneous.HomePage.VO.HomePageResponse;
import com.team7.Miscellaneous.HomePage.model.Article;
import com.team7.Miscellaneous.HomePage.model.News;
import com.team7.Miscellaneous.HomePage.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class HomePageService {
    @Autowired
    private RestTemplate restTemplate;

    public HomePageResponse homePageResponse(){

        //fetch news
        String keyword = "stocks";
        String stocksUrl = "http://localhost:3000/stocks";
        News news = restTemplate.getForObject("https://newsapi.org/v2/everything?q="+keyword+"&apiKey=534e909c1369448aa4cf147b4ee5b186",News.class);
        List<Article> articles = news.getArticles();
        System.out.println(news);
        //fetch Stocks

        Stock[] allStocks = restTemplate.getForObject(stocksUrl, Stock[].class);
        List<Stock> allStocksList = Arrays.asList(allStocks);
        //sort by percChange
        //find top Trending , Losers, Gainers
        // 20% trending 40% top gainers 40% top losers
        int n= allStocksList.size();
        int tsb=0,tse,tgb,tge,tlb,tle=n;
        tse = (int)Math.ceil((20.0/100)*n);
        tgb = tse;
        tge = (int)Math.ceil((60.0/100)*n);
        tlb = tge;
        List<Stock> trendingStocks = new ArrayList<Stock>();
        List<Stock> topGainers = new ArrayList<Stock>();
        List<Stock> topLosers = new ArrayList<Stock>();

        //trending stocks
        for(int i=tsb;i<tse;i++){
            trendingStocks.add(allStocksList.get(i));
        }
        //top gainers
        for(int i=tgb;i<tge;i++){
            topGainers.add(allStocksList.get(i));
        }
        //top losers
        for(int i=tlb;i<tle;i++){
            topLosers.add(allStocksList.get(i));
        }
        //create HomePageResponseObject & Return
        HomePageResponse homePageResponse = new HomePageResponse(articles,trendingStocks,topGainers,topLosers,allStocksList);
        return homePageResponse;
    }
}
