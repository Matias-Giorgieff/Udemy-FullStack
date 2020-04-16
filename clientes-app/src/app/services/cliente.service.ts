import { Injectable } from '@angular/core';
import { Cliente } from '../components/clientes/cliente';
import { CLIENTES } from '../components/clientes/cliente.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // ENDPOINT
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor( private _HttpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]>  {
    // return of(CLIENTES);
    return this._HttpClient.get<Cliente[]>(this.urlEndPoint);
    // return this._HttpClient.get(this.urlEndPoint).pipe(
    //   map( responde => responde as Cliente[])
    // );
  }

  create(cliente: Cliente) : Observable<Cliente>{
    return this._HttpClient.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  getCliente(id): Observable<Cliente>{
    return this._HttpClient.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }


  update(cliente: Cliente): Observable<Cliente>{
    return this._HttpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }
}
