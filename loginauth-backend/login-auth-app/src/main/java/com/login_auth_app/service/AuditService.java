package com.login_auth_app.service;

import com.login_auth_app.entity.AuditLog;
import com.login_auth_app.repository.AuditRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuditService {
    private final AuditRepository repo;
    public AuditService(AuditRepository repo){ this.repo = repo; }

    public void log(String username, String action, String ip, String details){
        AuditLog a = new AuditLog();
        a.setUsername(username);
        a.setAction(action);
        a.setDetails(details);
        a.setTimestamp(LocalDateTime.now());
        repo.save(a);
    }
}
