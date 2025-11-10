package com.login_auth_app.service;

import com.login_auth_app.entity.User;
import com.login_auth_app.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo){ this.repo = repo; }
    public Optional<User> findByUsername(String username){ return repo.findByUsername(username); }
    public User save(User user){ return repo.save(user); }
}
