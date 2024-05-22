package db.lab6.controller;

import db.lab6.dto.UserDTO;
import db.lab6.entity.User;
import db.lab6.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @PostMapping("/add")
    public User addUser(@RequestBody UserDTO userDTO) {
        User user = userService.addUser(userDTO);
        return user;
    }

    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return user;
    }

    @GetMapping("/get/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        User user = userService.updateUser(id, userDTO);
        return user;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted";
    }
}
