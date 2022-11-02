package in.capstone.loginservice.model;


import java.io.Serializable;
import java.util.Date;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private final Date expirationDate;
    private final int id;

    public AuthenticationResponse(String jwt, Date expirationDate, int id) {
        this.jwt = jwt;
        this.expirationDate = expirationDate;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getJwt() {
        return jwt;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

}