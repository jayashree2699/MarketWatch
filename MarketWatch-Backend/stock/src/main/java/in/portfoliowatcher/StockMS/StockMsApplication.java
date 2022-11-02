package in.portfoliowatcher.StockMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class StockMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockMsApplication.class, args);
	}

}
