import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produto } from '../models/produto.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProdutoService {

  constructor(private http:HttpClient) {}

  private produtoUrl = 'http://localhost:8080/vendas-backend/produtos';
  //private userUrl = '/api';

  public getProdutos() {
    return this.http.get<Produto[]>(this.produtoUrl);
  }

  public deleteProduto(produto) {
    return this.http.delete(this.produtoUrl + "/"+ produto.codigo);
  }

  public createProduto(produto) {
    return this.http.post<Produto>(this.produtoUrl, produto);
  }

}
