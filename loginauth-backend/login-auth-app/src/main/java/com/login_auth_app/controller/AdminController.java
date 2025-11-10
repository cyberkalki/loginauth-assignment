package com.login_auth_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/secure")
    public String secure() {
        System.out.println("Admin endpoint hit");
        return "Admin secure area";
    }
}