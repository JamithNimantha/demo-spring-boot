package com.akvasoft.demospringboot.controller;


import com.akvasoft.demospringboot.dto.Response;
import com.akvasoft.demospringboot.dto.UserDTO;
import com.akvasoft.demospringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/login")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/get-user",method = RequestMethod.POST)
    public ResponseEntity<Response>getUserDetails(@RequestBody UserDTO userDTO){
        Response response = new Response();
        UserDTO user = userService.getUser(userDTO.getName(), userDTO.getPassword());
        if (user!=null){
            response.setSuccess(true);
            response.setResult(user);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.setSuccess(false);
            response.setResult(null);
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }

      //  return new ResponseEntity<>(response, HttpStatus.OK);
    }




}
