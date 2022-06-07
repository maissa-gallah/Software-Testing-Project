package com.Backend;


import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.Backend.models.User;
import com.Backend.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;


@PropertySource("classpath:application.properties")

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	ObjectMapper mapper;
	

	
	
	
	@Test
	public void getUser_success() throws Exception {
		// given a list of users
		
		User user1 = new User(1,"maissa1","gallah","maissaglh@gmail.com","sousse" ,"female");
		User user2 =  new User(2,"maissa2","gallah","maissaglh@gmail.com","sousse" ,"female");
		User user3 =  new User(3,"maissa3","gallah","maissaglh@gmail.com","sousse" ,"female");
		List<User> users = List.of(user1, user2, user3);
		userRepository.saveAll(users);

		// when we perform GET request /users
		ResultActions response = mockMvc.perform(MockMvcRequestBuilders.get("/users"));

		// then list all users
		response.andExpect(MockMvcResultMatchers.status().isOk());
		response.andExpect(MockMvcResultMatchers.jsonPath("$", CoreMatchers.is(users.size())));
	}
	
	@Test
	public void create_success() throws Exception {
		// given a user
		User user = new User(4,"maissa4","gallah","maissaglh@gmail.com","sousse" ,"female");

		// when we perform a POST request /users/create
		MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/users/create")
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
				.content(this.mapper.writeValueAsString(user));
		ResultActions response = mockMvc.perform(mockRequest);

		// then create the user object
		response.andExpect(status().isOk()).andExpect(jsonPath("$", notNullValue()))
				.andExpect(jsonPath("$.firstname", is("maissa4")));
	}
	
	@Test
	public void vacccinated_success() throws Exception {
		// given an update user
		User updated_user = new User(5,"maissa3","gallah","maissaglh@gmail.com","sousse" ,"female");

		User userr =userRepository.save(updated_user);
	
		int id =userr.getId();
		// when we perform a PUT request /users with the body containing the updated
		// user
		MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.put("/users/update/"+id)
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
				.content(this.mapper.writeValueAsString(userr));
		ResultActions response = mockMvc.perform(mockRequest);

		// then update the user object
		response.andExpect(status().isOk()).andExpect(jsonPath("$", notNullValue()))
				.andExpect(jsonPath("$.vaccinated", is(true)));
	}
	// test what to do in case the user is not found
	
	

	@Test
	void contextLoads() {
	}
	

}
