import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from 'src/app/shared/property-detail.service';
import { NgForm } from '@angular/forms';
import { PropertyDetail } from 'src/app/shared/property-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-detail-form',
  templateUrl: './property-detail-form.component.html',
  styles: [
  ]
})
export class PropertyDetailFormComponent implements OnInit {

  constructor(public service: PropertyDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPropertyDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Property Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPropertyDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Property Detail Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PropertyDetail();
  }

}
