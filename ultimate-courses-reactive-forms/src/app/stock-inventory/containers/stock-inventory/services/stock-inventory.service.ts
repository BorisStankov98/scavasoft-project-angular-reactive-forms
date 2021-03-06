import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable()
export class StockInventoryService {
    constructor(
        private http:HttpClient
    ){}
    getCart():Observable<any>{
        return this.http.get('http://localhost:3000/api/products')
    }
}