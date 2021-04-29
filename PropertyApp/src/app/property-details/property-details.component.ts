import { Component, OnInit } from '@angular/core';
import { PropertyDetail } from '../shared/property-detail.model';
import { PropertyDetailService } from '../shared/property-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styles: [
  ]
})
export class PropertyDetailsComponent implements OnInit {

  constructor(public service: PropertyDetailService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PropertyDetail)
  {
    this.service.formData =  Object.assign({},selectedRecord);
  }

  onDelete(id: number){
    if(confirm("Are you sure you want to delete this property record?")){
        this.service.deletePropertyDetail(id)
        .subscribe(
          res=>{
            this.service.refreshList();
            this.toastr.error("Deleted Successfully","Property Migration")
          },
          err => {console.log(err)}
        );
    }
  }

}
