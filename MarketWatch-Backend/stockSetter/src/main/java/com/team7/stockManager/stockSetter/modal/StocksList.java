package com.team7.stockManager.stockSetter.modal;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StocksList {
    List<Stock> allStocks;
}
