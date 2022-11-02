package in.capstone.loginservice.model;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.*;
import java.util.Arrays;
import java.util.stream.Collectors;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String imgpath;
    public User(){}

    public User(String username,String password){
        this.username=username;
        this.password=password;
    }
    public int getId() {
        return id;
    }

    public String getImagepath() {
        return imgpath;
    }

    public void setImagepath(String imagepath) {
        this.imgpath = imagepath;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}