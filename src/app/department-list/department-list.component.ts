import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentDetailsService } from  '../department-details.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private departmentDetails: DepartmentDetailsService) { }

  ngOnInit() {
    this.departments = this.departmentDetails.departments();
  }

  onSelect(department){
   // this.router.navigate(['/departments', department.id ]);
   this.router.navigate([department.id], {relativeTo: this.route});
  }

}
