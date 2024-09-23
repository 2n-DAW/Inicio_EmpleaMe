import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root' // 'root' indica que este servicio será singleton en toda la aplicación
})
export class JobService {
  constructor (
    private apiService: ApiService
  ) {}

  all_jobs(): Observable<Job[]> {
    return this.apiService.get(`${/jobs/}`);
  }

  get_job(slug: String): Observable<Job> {
    return this.apiService.get(`${/jobs/}${slug}`);
  }

  getJobsByCategory(slug: String): Observable<Job[]> {
    return this.apiService.get(`${/jobsByCategory/}${slug}`);
  }
}