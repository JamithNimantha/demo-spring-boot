package com.akvasoft.demospringboot.service;

import com.akvasoft.demospringboot.dto.UserDTO;
import com.akvasoft.demospringboot.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDTO getUser(String name, String password);

}
