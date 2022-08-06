package com.npci.onlinequiz.entities.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.onlinequiz.entities.Role;
@RepositoryRestResource(path = "role")
@CrossOrigin("http://localhost:4200/")
public interface RoleRepository extends JpaRepository<Role, Integer>{

}
