package com.npci.onlinequiz.entities;

import javax.persistence.*;

@Entity
@Table(name = "question")
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "QUESID")
	private Integer quesId;

	@Column(name = "CONTENT")
	private String content;

	@Column(name = "OPTION1")
	private String option1;
	
	@Column(name = "OPTION2")
	private String option2;
	
	@Column(name = "OPTION3")
	private String option3;
	
	@Column(name = "OPTION4")
	private String option4;

	@Column(name = "ANSWER")
	private String answer;
	
	@Column(name = "QUIZID")
	private Integer quizId;
	
	@Transient
	private String givenAnswer;

	@JoinColumn(name = "QUIZID", insertable = false, updatable = false)
    @ManyToOne(targetEntity = Quiz.class, fetch = FetchType.EAGER)
	private Quiz quiz;

	public Question() {
	}
	
	public Integer getQuizId() {
		return quizId;
	}

	public void setQuizId(Integer quizId) {
		this.quizId = quizId;
	}

	public Integer getQuesId() {
		return quesId;
	}

	public void setQuesId(Integer quesId) {
		this.quesId = quesId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public String getGivenAnswer() {
		return givenAnswer;
	}

	public void setGivenAnswer(String givenAnswer) {
		this.givenAnswer = givenAnswer;
	}
}
