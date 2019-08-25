import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute,
              private router: Router) {

   }

  ngOnInit() {

    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap )=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  overview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate(['../'+previousId],{relativeTo:this.route});
  }

  goNext(){
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../'+nextId],{relativeTo:this.route});
  }

  goBack(){
    // this.router.navigate(['/departments']);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  }
