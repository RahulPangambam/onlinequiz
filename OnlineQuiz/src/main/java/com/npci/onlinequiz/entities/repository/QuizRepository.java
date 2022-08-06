package com.npci.onlinequiz.entities.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.onlinequiz.entities.Quiz;

@RepositoryRestResource(path = "quiz")
@CrossOrigin("http://localhost:4200/")
public interface QuizRepository extends JpaRepository<Quiz, Integer>{
	public Set<Quiz> findByCategoryId(Integer categoryId);

}
