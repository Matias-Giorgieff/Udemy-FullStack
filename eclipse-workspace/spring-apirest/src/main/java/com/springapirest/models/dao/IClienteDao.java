package com.springapirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.springapirest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {
	
	

}
