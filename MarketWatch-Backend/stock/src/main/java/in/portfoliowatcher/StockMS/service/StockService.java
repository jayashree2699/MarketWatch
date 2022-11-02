package in.portfoliowatcher.StockMS.service;
import in.portfoliowatcher.StockMS.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StockService {


    public List<Stock> getAllStock()
    {
        RestTemplate restTemplate = new RestTemplate();
        Stock[] response = restTemplate.getForObject("http://localhost:3000/stocks", Stock[].class);
        List<Stock> stocks = new ArrayList<Stock>();
        for(int i=0;i< response.length;i++){
            stocks.add(response[i]);
        }
        return stocks;
    }

    public Stock getStockById(String id)
    {
        RestTemplate restTemplate = new RestTemplate();
        Stock response = restTemplate.getForObject("http://localhost:3000/stocks/"+id, Stock.class);
        return response;
    }


    }

