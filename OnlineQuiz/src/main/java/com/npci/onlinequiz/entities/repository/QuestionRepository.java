package com.npci.onlinequiz.entities.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.onlinequiz.entities.Question;

@RepositoryRestResource(path = "question")
@CrossOrigin("http://localhost:4200/")
public interface QuestionRepository extends JpaRepository<Question, Integer>{
	public Set<Question> findByQuizId(Integer quizId);

}
