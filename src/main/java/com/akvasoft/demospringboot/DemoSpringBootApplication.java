package com.akvasoft.demospringboot;

import com.akvasoft.demospringboot.controller.UserController;
import com.akvasoft.demospringboot.dto.UserDTO;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DemoSpringBootApplication {

//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//        return application.sources(DemoSpringBootApplication.class);
//    }

    public static void main(String[] args) {
        SpringApplication.run(DemoSpringBootApplication.class, args);
//        UserController controller = new UserController();
//        UserDTO userDTO = new UserDTO();
//        userDTO.setName("user");
//        userDTO.setPassword("1234");
//        System.out.println("demoApp "+userDTO.toString());
//        //controller.getUserDetails(userDTO);

    }

}

