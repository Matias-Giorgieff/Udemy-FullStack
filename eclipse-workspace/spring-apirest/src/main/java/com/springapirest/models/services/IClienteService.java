package com.springapirest.models.services;

import java.util.List;

import com.springapirest.models.entity.Cliente;

public interface IClienteService {
	
//	Buscar Todo
	public List<Cliente> findAll();
//	Buscar por ID
	public Cliente findById(Long id);
//	Guardar y rertorna el cliente guardado
	public Cliente save(Cliente cliente);
//	Eliminar por ID
	public void delete(Long id);
	
	
	

}
