package in.portfoliowatcher.StockMS.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Description {
    String symbol;
    String industry;
    String esg_rating;
}
