In this step, I focused on testing the different actions (functions) in the BookController in the **Frontend**.

Each component (profile/form/app) is isolated from the other then the spec of each module is used to test the components independent of the others.
Also I used the providers in the TestBed.configureTestingModule to mock the methode of the service to provide the id of the added user. That way, we can make sure we are trully isolating the component from the service.

You can run the test manually with :
```
cd frontend
ng test

```
###in the app component module 
I execute 3 tests:
* the app was created succefully or not.
* the name of the project was returned or not.
* verify the title and the initails variables.

###in the form component module 
I execute 9 tests:
* The component was created succefully or not.
* The input of the firstname was valide or not.
* The input to field the sex exist or not(male/female).
* Contain the the title of the forum.
* Submit a form emits a user : in this case i was the mocking to mock the service by providing value of the output.
* Valid inputs form or not.
* The output of this component has a duplicate values or not.
* The form has validators.
* The innertext of the button.


![execution](https://github.com/maissa-gallah/Software-Testing-Project/blob/main/test%20unitaire.PNG)






