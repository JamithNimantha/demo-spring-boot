package com.akvasoft.demospringboot.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = 4366679991004427870L;
    private int id;
    private String name;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("UserDTO{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
