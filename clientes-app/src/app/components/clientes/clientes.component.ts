import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor( private _ClienteService: ClienteService) { }

  ngOnInit(): void {
    this._ClienteService.getClientes()
        .subscribe( clientes => this.clientes = clientes);
  }

}
