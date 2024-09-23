import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root' // 'root' indica que este servicio será singleton en toda la aplicación
})
export class CategoryService {
  constructor (
    private apiService: ApiService
  ) {}

  all_categories(): Observable<Category[]> {
    return this.apiService.get(`${/categories/}`);
  }
}