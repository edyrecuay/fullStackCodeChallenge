import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from '../../shared/property-detail.service';
import { PropertyDetail } from '../../shared/property-detail.model';
import { Property  } from '../../shared/property-old-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-old-form',
  templateUrl: './property-old-form.component.html',
  styles: [
  ]
})
export class PropertyOldFormComponent implements OnInit {

  constructor(public service: PropertyDetailService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshListFromRemteAPI();
  }
/*
  populateForm(selectedRecord: PropertyDetail)
  {
    this.service.formData =  Object.assign({},selectedRecord);
  }
*/
  onSave(selectedRecord: Property){

    this.service.formData.id          = selectedRecord.id;
    
    if(selectedRecord.address){
      this.service.formData.address1    = selectedRecord.address.address1;
      this.service.formData.address2    = selectedRecord.address.address2;
      this.service.formData.city        = selectedRecord.address.city;

      this.service.formData.country     = selectedRecord.address.country;
      this.service.formData.county      = selectedRecord.address.county;
      this.service.formData.district    = selectedRecord.address.district;
      this.service.formData.state       = selectedRecord.address.state;
      this.service.formData.zip         = selectedRecord.address.zip;
      this.service.formData.zipPlus4    = selectedRecord.address.zipPlus4;
    }

    if(selectedRecord.physical)
      this.service.formData.yearBuilt   = selectedRecord.physical.yearBuilt;
    if(selectedRecord.financial){
      this.service.formData.listPrice   = selectedRecord.financial.listPrice;
      this.service.formData.monthlyRent = selectedRecord.financial.monthlyRent;
      this.service.formData.grossYield  = (selectedRecord.financial.monthlyRent * 12)/selectedRecord.financial.listPrice;
    }

    

    this.service.postPropertyDetail().subscribe(
      res => {
        //this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Migrated successfully', 'Property Detail Migrator')
      },
      err => { console.log(err); }
    );
  }

}
