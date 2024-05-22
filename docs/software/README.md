# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-io24-team4` DEFAULT CHARACTER SET utf8 ;
USE `db-io24-team4` ;

-- -----------------------------------------------------
-- Table `db-io24-team4`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`user` (
  `id` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`member` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_member_Role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db-io24-team4`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`grant` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Grant_Role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_grant_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `db-io24-team4`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project_member` (
  `id` INT NOT NULL,
  `member_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_member_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_project_member_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_member_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `db-io24-team4`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_member_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`task` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `isCompleted` TINYINT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (1, `ProjectOwner`);
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (2, `Developer`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (1, `create_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (2, `delete_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (3, `change_task_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (4, `change_project_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (5, `add_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (6, `delete_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (7, `delete_project`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (1, 1, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (2, 1, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (3, 1, 3);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (4, 1, 4);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (5, 1, 5);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (6, 1, 6);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (7, 1, 7);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (8, 2, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (9, 2, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (10, 2, 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (1, `yellowmonkey@gmail.com`, `yellowmonkey`, `Bws3YXQ8`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (2, `wonderful@gmail.com`, `w0nderful`, `NW4Xzm4h`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (3, `denysholovin03@gmail.com`, `holovin.d`, `sDnGtCiN`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (2, 2, 2)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (3, 3, 2)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (2, 2, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (3, 3, 1)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project` (`id`, `name`, `description`) VALUES (1, `course work`, `Our course work`)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (1, `Frontend`, `Frontend part`, 0, 1)
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (2, `Backend`, `Backend part`, 0, 1)

COMMIT;
```

## RESTfull сервіс для управління даними
Цей RESTfull сервіс розроблений із застосуванням Spring Framework, який забезпечує потужну підтримку для створення веб-додатків та сервісів. Основними компонентами є:

- Spring Boot - спрощує конфігурацію та розгортання додатку, забезпечуючи вбудовану підтримку серверів застосунків.
- Spring Data JPA - використовується для взаємодії з базами даних через Java Persistence API (JPA). Він дозволяє легко створювати репозиторії для роботи з даними, автоматизуючи більшість CRUD операцій, що полегшує роботу з базою даних.

## Entity

### Role

```java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Table(name = "role")
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;
}
```

### User

```java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;
}
```

### Member

```java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "member")
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
```

## DTO

### RoleDTO

```java
package db.lab6.dto;

import lombok.Data;

@Data
public class RoleDTO {
    private String name;
}
```

### UserDTO

```java
package db.lab6.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String email;
    private String username;
    private String password;
}
```

### MemberDTO

```java
package db.lab6.dto;

import lombok.Data;

@Data
public class GrantDTO {
    private Long roleId;
    private Long userId;
}
```

## Controller

### RoleController

```java
package db.lab6.controller;

import db.lab6.dto.RoleDTO;
import db.lab6.entity.Role;
import db.lab6.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/role")
public class RoleController {
    private RoleService roleService;

    @PostMapping("/add")
    public Role addRole(@RequestBody RoleDTO roleDTO) {
        Role role = roleService.addRole(roleDTO);
        return role;
    }

    @GetMapping("/get/{id}")
    public Role getRoleById(@PathVariable Long id) {
        Role role = roleService.getRoleById(id);
        return role;
    }

    @GetMapping("/get/all")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }

    @PutMapping("/update/{id}")
    public Role updateRole(@PathVariable Long id, @RequestBody RoleDTO roleDTO) {
        Role role = roleService.updateRole(id, roleDTO);
        return role;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRole(@PathVariable Long id) {
        roleService.deleteRole(id);
        return "Role deleted";
    }
}
```

### UserController

```java
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

```

### MemberController

```java
package db.lab6.controller;

import db.lab6.dto.MemberDTO;
import db.lab6.entity.Member;
import db.lab6.service.MemberService;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@Data
public class MemberController {
    private MemberService memberService;

    @PostMapping("/add")
    public Member addMember(@RequestBody MemberDTO memberDTO) {
        Member member = memberService.addMember(memberDTO);
        return member;
    }

    @GetMapping("/get/{id}")
    public Member getMemberById(@PathVariable Long id) {
        Member member = memberService.getMemberById(id);
        return member;
    }

    @GetMapping("/get/all")
    public List<Member> getAllGrants() {
        return memberService.getAllMembers();
    }

    @GetMapping("/get/by_role/{id}")
    public List<Member> getMembersByRoleId(@PathVariable Long id) {
        return memberService.getMembersByRoleId(id);
    }

    @PutMapping("/update/{id}")
    public Member updateMember(@PathVariable Long id, @RequestBody MemberDTO memberDTO) {
        Member member = memberService.updateMember(id, memberDTO);
        return member;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return "Grant deleted";
    }
}
```

## Service

### RoleService

```java
package db.lab6.service;

import db.lab6.dto.RoleDTO;
import db.lab6.entity.Role;
import db.lab6.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RoleService {
    private RoleRepository roleRepository;

    public Role addRole(RoleDTO roleDTO) {
        Role role = new Role();
        role.setName(roleDTO.getName());
        return roleRepository.save(role);
    }

    public Role getRoleById(Long id) {
        return roleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Role not found"));
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role updateRole(Long id, RoleDTO roleDTO) {
        Role role = roleRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Role not found"));
        role.setName(roleDTO.getName());
        return roleRepository.save(role);
    }

    public void deleteRole(Long id) {
        if (roleRepository.existsById(id)) {
            roleRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Role not found");
        }
    }
}
```

### UserService

```java
package db.lab6.service;

import db.lab6.dto.UserDTO;
import db.lab6.entity.User;
import db.lab6.repository.UserRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class UserService {
    private UserRepository userRepository;

    public User addUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
}
```
### GrantService

```java
package db.lab6.service;

import db.lab6.dto.GrantDTO;
import db.lab6.entity.Grant;
import db.lab6.repository.GrantRepository;
import db.lab6.repository.PermissionRepository;
import db.lab6.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GrantService {
    private GrantRepository grantRepository;
    private RoleRepository roleRepository;
    private PermissionRepository permissionRepository;

    public Grant addGrant(GrantDTO grantDTO) {
        Grant grant = new Grant();
        grant.setRole(
                roleRepository.findById(grantDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        grant.setPermission(
                permissionRepository.findById(grantDTO.getPermissionId()).orElseThrow(() -> new IllegalArgumentException("Permission not found"))
        );
        return grantRepository.save(grant);
    }

    public Grant getGrantById(Long id) {
        return grantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Grant not found"));
    }

    public List<Grant> getAllGrants() {
        return grantRepository.findAll();
    }

    public void deleteGrant(Long id) {
        grantRepository.deleteById(id);
    }

    public Grant updateGrant(Long id, GrantDTO grantDTO) {
        Grant grant = getGrantById(id);
        grant.setRole(
                roleRepository.findById(grantDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        grant.setPermission(
                permissionRepository.findById(grantDTO.getPermissionId()).orElseThrow(() -> new IllegalArgumentException("Permission not found"))
        );
        return grantRepository.save(grant);
    };

    public List<Grant> getGrantsByRoleId(Long roleId) {
        return grantRepository.findByRoleId(roleId);
    }

    public List<Grant> getGrantsByPermissionId(Long permissionId) {
        return grantRepository.findByPermissionId(permissionId);
    }
}
```
## Repository

### RoleRepository

```java
package db.lab6.repository;

import db.lab6.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> { }
```

### PermissionRepository

```java
package db.lab6.repository;

import db.lab6.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> { }
```

### GrantRepository

```java
package db.lab6.repository;

import db.lab6.entity.Grant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GrantRepository extends JpaRepository<Grant, Long> {
    List<Grant> findByRoleId(Long roleId);
    List<Grant> findByPermissionId(Long permissionId);
}
```

## SpringMainClass

```java
package db.lab6;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lab6Application {

	public static void main(String[] args) {
		SpringApplication.run(Lab6Application.class, args);
	}
}
```
