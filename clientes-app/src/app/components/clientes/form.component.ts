import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  constructor(private _ClienteService: ClienteService,
              private _Router: Router,
              private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this._ActivatedRoute.params.subscribe( params => {
      let id = params['id'];
      if(id){
        this._ClienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }


  public create(): void{
    console.log('Clicked!');
    console.log(this.cliente);

    this._ClienteService.create(this.cliente)
    .subscribe(
      cliente => {
        this._Router.navigate(['/clientes'])
        swal('Nuevo cliente', `El cliente ${cliente.nombre} creado con éxito`, 'success');
      }
    )
  }

  update(): void{
    this._ClienteService.update(this.cliente)
        .subscribe( cliente => {
          this._Router.navigate(['/clientes']);
          swal('Cliente actualizado', `Cliente ${cliente.nombre} actualizado con exito`, 'success');
        })
  }
}
