package com.akvasoft.demospringboot.service.impl;

import com.akvasoft.demospringboot.dto.UserDTO;
import com.akvasoft.demospringboot.entity.User;
import com.akvasoft.demospringboot.repo.UserRepo;
import com.akvasoft.demospringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {


    private final UserRepo userRepo;

    @Autowired
    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @Override
    public UserDTO getUser(String name, String password) {
        UserDTO userDTO = new UserDTO();
        User topByNameEqualsAndPasswordEquals = userRepo.findTopByNameEqualsAndPasswordEquals(name, password);
        if (topByNameEqualsAndPasswordEquals != null) {
            userDTO.setName(topByNameEqualsAndPasswordEquals.getName());
            userDTO.setPassword(topByNameEqualsAndPasswordEquals.getPassword());
            return userDTO;
        }else{
            return null;
        }

    }


}
