package in.portfoliowatcher.StockMS.model;

import lombok.*;

import java.util.ArrayList;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StockReport {
    ArrayList<Double> history;
    double low;
    double high;

}
