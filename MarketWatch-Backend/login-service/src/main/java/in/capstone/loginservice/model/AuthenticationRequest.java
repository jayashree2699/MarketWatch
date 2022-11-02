package in.capstone.loginservice.model;

import lombok.*;

import java.io.Serializable;

@Data
public class AuthenticationRequest implements Serializable {

    private String username;
    private String password;

}
