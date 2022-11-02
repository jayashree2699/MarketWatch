package in.capstone.loginservice;

import in.capstone.loginservice.Util.JwtUtil;
import in.capstone.loginservice.model.AuthenticationRequest;
import in.capstone.loginservice.model.AuthenticationResponse;
import in.capstone.loginservice.model.User;
import in.capstone.loginservice.service.MyUserDetailsService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@CrossOrigin("http://localhost:4200")
public class HomeResource {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping("/authenticate/signup")
    public User addUser(@RequestBody User user){
        return userDetailsService.addUser(user);
    }




    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
             authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException badCredentialsException)
        {
            throw new Exception("Incorrect...",badCredentialsException);
        }
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        Date expirationDate = jwtTokenUtil.extractExpiration(jwt);

        return ResponseEntity.ok(new AuthenticationResponse(jwt, expirationDate, userDetailsService.getUserId()));
    }

    @RequestMapping(value = "/check", method = RequestMethod.GET)
    public boolean check(){
        return true;
    }


}
