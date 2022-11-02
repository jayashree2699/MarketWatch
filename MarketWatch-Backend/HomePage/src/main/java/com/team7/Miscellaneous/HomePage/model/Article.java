package com.team7.Miscellaneous.HomePage.model;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Article {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public class Source{
        String id;
        String source;
    }

    String author;
    String title;
    String description;
    String url;
    String urlToImage;
    String publishedAt;
    String content;

}
