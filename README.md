# Software Testing Lab



Evax is an application that manages users to enregister to vaccinate!

The project has a basic Frontend/Backend application with basic CRUD features. The main focus is to apply all different test levels .


## Software Testing Lab

As part of The Software Testing Lab, We will be performing four levels of tests :

1. Unit Tests
2. Integration Tests
3. System Tests
4. Acceptance Tests

You can view the status of the tests in the pipeline or run the tests manually.

### Step 1 : Unit Tests

In this step, I focused on testing the different actions (functions) in the BookController in the **Frontend**.

Each component (profile/form/app) is isolated from the other then the spec of each module is used to test the components independent of the others.
Also I used the providers in the TestBed.configureTestingModule to mock the methode of the service to provide the id of the added user. That way, we can make sure we are trully isolating the component from the service.

You can run the test manually with :
```
cd frontend
ng test
```
Go to frontend/readme.md to view more details. 

### Step 2 : Integration Tests

Here we test the integration of different parts of backend.


I will be using a seperate database for testing so that it won't affect the actual Database. 

You can run the test manually with :
```
cd backend
mvn test
```
Go to backend/readme.md to view more details. 

### Step 3 : System Tests

I used Cypress to do an End-to-End test for the whole application.

I have 3 different scenarios:

1.  Create a new user
2.  vaccinate a user


You can run the test manually with :
```
cd e2e
ng run evax-example:cypress-open
```
Go to e2e/readme.md to view more details. 

### Step 4 : Acceptance Tests

I used a User Acceptance Test Template to test two features : 

- Adding a new user
- vaccinate a user.
