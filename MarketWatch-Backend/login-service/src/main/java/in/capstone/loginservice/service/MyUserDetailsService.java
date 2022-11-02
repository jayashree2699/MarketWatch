package in.capstone.loginservice.service;

import in.capstone.loginservice.model.MyUserDetails;
import in.capstone.loginservice.model.User;
import in.capstone.loginservice.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@Slf4j
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    User user;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Username "+username);
        Optional<User> user = userRepository.findByUsername(username);
        log.info("user-----------"+user);
        User user1=userRepository.findById(1).orElse(null);
        log.info("user1 -"+user1.getUsername());
        this.user = user.orElse(null);
        log.info("Username in database "+this.user.getUsername());
        log.info("Password in database "+this.user.getPassword());
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + username));
        return user.map(MyUserDetails::new).get();
       /* Optional<User> user= Optional.of(new User("foo","foo"));
        User user1=new User("foo","foo");
        UserDetails userDetails=new MyUserDetails(user1);
        return userDetails;*/
    }


    public User addUser(User u){
        return userRepository.save(u);
    }

    public int getUserId(){
        return this.user.getId();
    }
}