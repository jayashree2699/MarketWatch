package com.team7.Miscellaneous.HomePage.controller;

import com.team7.Miscellaneous.HomePage.VO.HomePageResponse;
import com.team7.Miscellaneous.HomePage.service.HomePageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class HomePageController {
    @Autowired
    private HomePageService service;

    @GetMapping
    public HomePageResponse homePageResponse(){
        return service.homePageResponse();
    }
}
