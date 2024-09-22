import { Component, OnInit } from '@angular/core';
import { Job } from '../core/models/job.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  job!: Job;
  slug!: string | null;

  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: any) => {
        this.slug = data.job.job.slug;
        this.job = data.job.job;
        console.log(this.slug, this.job);
      }
    );  
  }
}