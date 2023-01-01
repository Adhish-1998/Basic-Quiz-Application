# Basic-Quiz-Application

This is an online quiz organizing website project, developed using Nodejs's web framework Express.
For front-end, I have used React, and designing front-end, I have used Twitter's front-end library Bootstrap. And I also use D3 Js for Resultant Graph of User's Score.

##Current Features

###Site access features:

   * User must be logged in to access the Quiz.
   * For signup user is required to give full name, e-mail and password.
   * For login the user will be required to enter email and password only.


###Features of the quiz:

   * All questions are multiple choice question.
   * Each question is displayed only once per user.
   * Questions are displayed randomly for every user.
   * A message will be displayed after every attempted question whether the answer was correct or incorrect.

###Administrative features:

   * Only admin can add questions.
   * Admin can add questions and modify them until they are not marked as Has been published?
   * Once a question has been published, it can neither be modified nor can be accessed. Admin can only see a list of questions.
   * Admin can search questions by question text or choice text.
   * Admin can filter questions based on whether the questions have been published or not.
   * Admin can assign quizzes to users

## Run Locally

Clone the project

```bash
  git clone https://github.com/Aaditya1978/Quiz-App-MERN
```

Front-end is pushed in Frontend Branch

```bash
  cd Basic-Quiz-Application
  git checkout frontend
  npm install
```

Back-end is pushed in Backend Branch

```bash
  cd Basic-Quiz-Application
  git checkout backend
  npm install
```


