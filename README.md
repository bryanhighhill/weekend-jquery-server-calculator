# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description
This app consists of two server-side calculators. All logic for the calculators are implemented and performed on the server.
The first calculator takes in two integer values in the fields provided. An operator can be selected by clicking on one of the four options. Once the equal button is clicked, the equation is send to the server where the logic is performed. The equation and answer are then sent back to the dom where it can be viewed underneath the "Calculator #1 Equation History" header. The "C" button clears out the input fields for that calculator.
On the second calculator, the user enters an equation using the keypad, which is visible in the calculator's display as it's being entered. Once the equal sign is clicked, the equation is send to the server where the math logic is performed. The equation and answer are send back to the dom where the answer is shown underneath the "Answer" header. A history of equations made using the second calculator can be seen beneath "Calculator #2 Equation History" however, the answers aren't included there.
If a user would like to view an answer to a previously performed equation, they can simply click on that equation in the equation history section. That equation is then sent back to the server where the logic is performed again. The recomputed answer is then made visible in the calculator's display, as well as beteath "Answer". 
The "clear display" button will clear out all data in the calculator's display. The "C" button will remove the most recent equation from the Equation History section.

## Time
1 week (approx)

## Start Project
npm install express
npm start server

## Tech Used
Node
Express
JavaScript
jQuery
AJAX
HTML
CSS



