package com.team7.stockManager.stockSetter.service;

import com.team7.stockManager.stockSetter.modal.Stock;
import com.team7.stockManager.stockSetter.modal.StocksList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class StockMarketSetterService {

    @Autowired
    private RestTemplate restTemplate;

    String dbUrl = "http://localhost:3000/stocks";
    public void marketSetter() throws IOException, InterruptedException {
        Stock[] stock = restTemplate.getForObject(dbUrl, Stock[].class);
        //loop over stock and edit values and send post request
        int n = stock.length;
        for(int i=1;i<=n;i++){
            //make changes in stock object
            makeChanges(stock[i-1]);
            //send post request
            restTemplate.put(dbUrl+"/"+i,stock[i-1],Stock.class);
            Thread.sleep(2000);
        }
       // System.out.println(stock[0]);
    }

    public void makeChanges(Stock s){
        //generate a random number between -10 to 10
        double changeP = generateRandom(-5,5);
        //set instPrice
        double instPrice = s.getInstPrice();
        double newPrice = instPrice + ((double)(changeP/100)*instPrice);
        newPrice = Math.round(newPrice*100)/100;
        s.setInstPrice(newPrice);

        //update percentageChange
        double oneDayOldData = s.getTodaysReport().getHistory().get(0);

        //calc perChange
        float newPerChange = (float)(newPrice-oneDayOldData)/(float)(oneDayOldData)*(float)(100);
        newPerChange = Math.round(newPerChange*100)/100;
        System.out.println("holiiiii"+newPerChange);
        s.setPercChange(newPerChange);

        //change marketCap
        s.setMarketCap(s.getTotalVolume()*(long)newPrice);

        //changeTodays History
        s.getTodaysReport().getHistory().remove(0);
        s.getTodaysReport().getHistory().add(newPrice);
        if(newPrice<s.getTodaysReport().getLow()){
            s.getTodaysReport().setLow(newPrice);
        }

        if(newPrice>s.getTodaysReport().getHigh()){
            s.getTodaysReport().setHigh(newPrice);
        }

        //change weeklyHigh & Low
        if(newPrice<s.getWeeklyReport().getLow()){
            s.getWeeklyReport().setLow(newPrice);
        }
        if(newPrice>s.getWeeklyReport().getHigh()){
            s.getWeeklyReport().setHigh(newPrice);
        }

        //change Monthly High and Low
        if(newPrice<s.getMonthlyReport().getLow()){
            s.getMonthlyReport().setLow(newPrice);
        }
        if(newPrice>s.getMonthlyReport().getHigh()){
            s.getMonthlyReport().setHigh(newPrice);
        }

    }

    //generates random numbers in specifiedRange upto 2 decimal places
    double generateRandom(int min,int max){
        double rand = (Math.random()*(max-min+1)+min);
        rand = (double)Math.round(rand*100)/100;
        return rand;
    }
}
