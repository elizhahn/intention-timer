## Intention Timer
---

A [Front-End Project](https://frontend.turing.io/projects/module-1/intention-timer-group.html) by [Elizabeth Hahn](https://github.com/elizhahn), [Jackson McGuire](https://github.com/Jacksonmcguire), [Owen Hallgren](https://github.com/owenhallgren)



1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
5. [Challenges](#challenges)
6. [Wins](#wins)
7. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design Module 1 project. The project consists of building an application to match a provided comp. The MVP will allow the user to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time. In addition, the app will keep logged activities saved in their past activities section. 


## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how to implement client-side data persistence using localStorage and JSON
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP


## Technologies

* HTML
* CSS
* Javascript
* Git
* GitHub
* [GitHub Pages Site](https://elizhahn.github.io/intention-timer/)

---
## Features

+ [Main Page Layout](#main-page-layout)
+ [Form Validation](#form-validation)
+ [Timer](#timer)
+ [Past Activity Cards](#past-activity-cards)
+ [Persisting Cards](#persisting-cards)


## Main Page layout

The main page was built to match this [spec](https://frontend.turing.io/projects/module-1/intention-timer-group.html). 


## Form Validation

On the main page, the user will need to fill out a form for their activity. The user will select a category and see a color light up when category button is clicked. The user can then fill out the remaining inputs. If any of the inputs are not filled out, an error message will appear prompting the user for the correct information. 


![](https://media.giphy.com/media/L7zDlgnB7CtXHelvfu/giphy.gif)


## Timer
When the user clicks the "START ACTIVITY" button, The form will disappear, and a timer will appear that displays the time the user input into the form and the activity description. The timer button will have a corresponding color to the category picked on the form. When the user clicks the "START" button, the timer will begin to count down. Once the timer reaches zero minutes and zero seconds, "COMPLETE" will display inside the button, a "LOG ACTIVITY" button appears and a congratulatory message. 

![](https://media.giphy.com/media/6UGpfy85sPHNPRj5TU/giphy.gif)


## Past Activity Cards

If the user clicks the "LOG ACTIVITY" button, a card will be created and displayed on the right side of the window, and the timer will disappear revealing a "CREATE NEW ACTIVITY" button. This created card will describe the category, time, and activity description. In addition, each card has a colored marker that indicates which category was chosen. 

![](https://media.giphy.com/media/1ATbZs33HEWfxrFNNI/giphy.gif)

---


## Persisting Cards

When the user clicks the "CREATE NEW ACTIVITY" button, the main page will be displayed. The past activity cards will be displayed and the form will be ready for another session. Upon page load the past activity cards will still be displayed 

![](https://media.giphy.com/media/qK1qw5hQAQk1DpCisq/giphy.gif)


## Challenges

* Git workflow with 3 partners vs 2 partners, specifically merge conflicts. 
* Separating the DOM from the Data Model 
* Implementing a timer in javaScript for the first time
* Implementing flex box to do most of the layout

---
## Wins

* Learning how to work as a team and communicate ideas and problem solving techniques with each other
* Writing the HTML semantically with clean markup and consistent naming 
* Integrating solo and group work together and improving our skills with Pull Requests and reviews 
* Trusting each other to take on solo tasks, review code, and give/recieve feedback

---
## Future Additions

* Animations for user experience such as a timer animation that visually shows the time ticking as a color bar around the start button
* Ability for users to delete logged cards
* Ability for user to pause the timer
