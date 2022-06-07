
### Step 2 : Integration Tests

Here we test the integration of different parts of backend.

I will be using a seperate database for testing so that it won't affect the actual Database. 

You can run the test manually with :
```
cd backend
mvn test
```
I execute 4 tests:
* contaxtLoads(): check the integration with the database (connection,acces,...).
* getUser_success():allows to verify that the insertion of the users is made by comparing the number of the line in our base.
* create_success():allows to check the number of users by adding 3 users and to compare the number of lines in our database by 3.
* vaccinated_succes():call the request put /users/update/id using the MockHttpServletRequestBuilder. Then check that the attribute of the obtained result vaccinated is true.


## Resultat:
![execution](https://github.com/maissa-gallah/Software-Testing-Project/blob/main/test-integration.PNG)

