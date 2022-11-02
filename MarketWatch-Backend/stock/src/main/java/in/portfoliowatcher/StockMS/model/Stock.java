package in.portfoliowatcher.StockMS.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    String companyType;
    StockReport todaysReport;
    StockReport weeklyReport;
    StockReport monthlyReport;
    ESGScores esg;
    float esgScore;
}
