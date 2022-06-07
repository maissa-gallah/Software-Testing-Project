
I used Cypress to do an End-to-End test for the whole application.

I have 3 different scenarios:

1.  Create a new user
2.  vaccinate a user
  
we make the selection of each label of the form in order to fill it with values, then we click on the submit button to add a new user. We note that the number of users has increased by 1. And the profile of this new user is displayed on the screen in order to make the vaccine by clicking on the vaccinate button.
### number users initial:
![execution](https://github.com/maissa-gallah/Software-Testing-Project/blob/main/e2e.PNG)

### number users final:
![execution](https://github.com/maissa-gallah/Software-Testing-Project/blob/main/e2e.PNG)

You can run the test manually with :

```
cd e2e
ng run evax-example:cypress-open
```
or the save the result in a video sequence, you can run 
```
ng run evax-example:cypress-run
```
![execution](https://github.com/maissa-gallah/Software-Testing-Project/blob/main/video.PNG)
