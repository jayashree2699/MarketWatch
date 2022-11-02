package in.portfoliowatcher.StockMS.controller;

import in.portfoliowatcher.StockMS.model.Stock;
import in.portfoliowatcher.StockMS.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("api/stock")
public class StockController {

        @Autowired
        private StockService stockService;

        @GetMapping
        public List<Stock> getAllStock() throws IOException, InterruptedException {
            return stockService.getAllStock();
        }


        @GetMapping("/{id}")
        public Stock getStockById(@PathVariable("id") String id) throws IOException, InterruptedException {
            return stockService.getStockById(id);
        }


    }


