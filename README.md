# Password_Generator
```
Third Callenge. Due date: 16th of January 2022.
```

## Goal of the Project
***
```
To create a password generator web-based application.
```

## User Story
***
```
As an employee with access to sensitive data, I want to randomly generate a password that meets certain criteria
so that I can create a strong password that provides greater security.
```

## Criteria For Completion
***
```
1. Once the 'Generate Password' button is clicked, the user is given password criteria through window prompts.
2. The user can select if they want to add the criteria for their password through y/n answers. Yes/No are also accepted.
3. The user can select the lenght of the password, from 8-128 characters long.
4. The user can select between uppercase. lowercase, numeric, and/or special characters.
5. The answers are verified to enssure that at least one character option was selected as yes.
6. The page returns a password to the screen.
```

## Completion
***
The steps I took to coplete this challenge were:
- Added the starter code to the repository.
- Created the initial prompt logic.
   - Condenced some CSS code.
- Created a password object and initial properties.
- Added the logic to handle uppercase characters -not yet for password generation.
- Added the logic to handle lowercase characters -not yet for password generation.
- Added the logic to handle numeric characters -not yet for password generation.
- Added the logic to handle special characters -not yet for password generation.
- Added the logic to handle password length -not yet for password generation.
- Added the logic to generate the password.
  - Created a main function from where the code will branch from to complete the task.
  - Created a gatherAnswers() function to access the object methods to gather the user's answers.
  - Created a verifyAnswers() function to verify that at least one of the password criteria options was selected as yes.
  - Started the logic for the passwordGen() function.
  - Created the verifyCharSelector() to aid and simplify the process of password generation.
  - Finished the passwordGen() function.
  - Connected the provided writePassword() function to the main function.
- Added documentation to the codebase explaining the purpose of each code block.
- Added images for the README file.
- Corrected an oversight with the verifyCharSelector() function. No need to pass variables to it.

## Preview of the web site
![Preview of the web site. Initial state.](https://github.com/NicolasRojas-CENG/Password_Generator/blob/12b035db80af270571e579a5e640840c484d5a7c/resources/images/Base.PNG "Preview of the web site. Initial state.")
![Preview of the web site. Begining of the criteria prompts.](https://github.com/NicolasRojas-CENG/Password_Generator/blob/12b035db80af270571e579a5e640840c484d5a7c/resources/images/Initial_Prompt.PNG "Preview of the web site. Begining of the criteria prompts.")
![Preview of the web site. Password generated.](https://github.com/NicolasRojas-CENG/Password_Generator/blob/12b035db80af270571e579a5e640840c484d5a7c/resources/images/Generated_Password.PNG "Preview of the web site. Password generated.")

## Completed web application
***
[Click here to view the final result of the web application.](https://nicolasrojas-ceng.github.io/Password_Generator/ "Password Generator")
