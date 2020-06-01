import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';
import  swal  from'sweetalert2';


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


  delete(cliente: Cliente){
    swal({
      title: 'Está seguro?',
      text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'bnt btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then( (result) => {
      if(result.value){
        this._ClienteService.delete(cliente.id)
          .subscribe( response => {
            console.log(cliente);
            //Recorre cliente en cli y por cada uno pregunta si es distinto a cliente
            //El que sea igual no lo incluira en el nuevo listado de cliente (this.cliente)
            this.clientes = this.clientes.filter( cli => cli !== cliente);
            console.log(cliente);
            swal(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            )
        });
      }
    });
  }
}


