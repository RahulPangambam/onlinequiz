export class Question {
    constructor(public quesId : number,
                public content : string,
                public option1 : string,
                public option2 : string,
                public option3 : string,
                public option4 : string,
                public answer : string,
                public quizId : number,
                public givenAnswer : string){}
}
