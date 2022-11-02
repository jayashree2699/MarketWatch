package com.team7.stockManager.stockSetter.modal;

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
    String description;
    StockReport todaysReport;
    StockReport weeklyReport;
    StockReport monthlyReport;
    ESGScores esg;
    float esgScore;
}
