package com.team7.stockManager.stockSetter.modal;

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
