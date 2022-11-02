package com.team7.Miscellaneous.HomePage.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Stock {
    String id;
    String name;
    double instPrice;
    float percChange;
    long totalVolume;
    long marketCap;
    Description description;
    StockReport todaysReport;
    StockReport weeklyReport;
    StockReport monthlyReport;
    ESGScores esg;
    float esgScore;
    Chart chart;
}
