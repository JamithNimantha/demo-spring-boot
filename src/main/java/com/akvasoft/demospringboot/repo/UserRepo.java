package com.akvasoft.demospringboot.repo;

import com.akvasoft.demospringboot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User findTopByNameEqualsAndPasswordEquals(String name , String password);



}
