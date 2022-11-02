package com.team7.Miscellaneous.HomePage.model;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class News {
    String status;
    int totalResults;
    List<Article> articles;
}
