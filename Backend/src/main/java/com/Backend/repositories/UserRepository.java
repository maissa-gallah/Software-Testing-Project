package com.Backend.repositories;


import org.springframework.data.repository.CrudRepository;

import com.Backend.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	long countByVaccinated(boolean vaccinated);

}