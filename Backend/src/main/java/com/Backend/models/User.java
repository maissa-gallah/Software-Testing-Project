package com.Backend.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	

	public User() {
		super();
		
	}

	public User(Integer id,String firstname,String lastname,String email,String city ,String sex) {
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.email=email;
		long millis=System.currentTimeMillis();  
		this.birthday=new java.sql.Date(millis);  
		this.city=city;
		this.sex=sex;
		this.phone=56200797;
		this.vaccinationDate = null;
		this.vaccinated = false;

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String firstname;
	
	private String lastname;

	private String email;

	private java.sql.Date birthday;

	private String city;
	
	private String sex;
	
	private long phone;

	private Date vaccinationDate = null;
	
	private boolean vaccinated = false;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public java.sql.Date getBirthday() {
		return birthday;
	}

	public void setBirthday(java.sql.Date birthday) {
		this.birthday = birthday;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getSexe() {
		return sex;
	}

	public void setSexe(String sex) {
		this.sex = sex;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public Date getVaccinationDate() {
		return vaccinationDate;
	}

	public void setVaccinationDate(Date vaccinationDate) {
		this.vaccinationDate = vaccinationDate;
	}

	public boolean isVaccinated() {
		return vaccinated;
	}

	public void setVaccinated(boolean vaccinated) {
		this.vaccinated = vaccinated;
	}


}