package com.team7.Miscellaneous.HomePage.VO;

import com.team7.Miscellaneous.HomePage.model.Article;
import com.team7.Miscellaneous.HomePage.model.News;
import com.team7.Miscellaneous.HomePage.model.Stock;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HomePageResponse {
    List<Article> news;
    List<Stock> trendingStocks;
    List<Stock> topGainers;
    List<Stock> topLosers;
    List<Stock> allStocks;

}
