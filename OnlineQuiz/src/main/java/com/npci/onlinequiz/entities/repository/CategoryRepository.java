package com.npci.onlinequiz.entities.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.onlinequiz.entities.Category;

@RepositoryRestResource(path = "category")
@CrossOrigin("http://localhost:4200/")
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	public Set<Category> findByMainCategory(String mainCategory);

}
