package com.team7.stockManager.stockSetter.controller;

import com.team7.stockManager.stockSetter.service.StockMarketSetterService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

@RestController
@RequestMapping("setMarket")
public class StockMarketSetter {

    @Autowired
    StockMarketSetterService service;
    @GetMapping
    public void marketSetter() throws IOException, InterruptedException {

        int MINUTES = 1; // The delay in minutes
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @SneakyThrows
            @Override
            public void run() { // Function runs every MINUTES minutes.
                // Run the code you want here
                service.marketSetter(); // If the function you wanted was static
            }
        }, 0, 1000 * 60 * MINUTES);
    }
}
