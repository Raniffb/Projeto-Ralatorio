import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup = new FormGroup({
    selectedShift: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  });
  selectedShift: any;
  startDate: string = '';
  endDate: string = '';
  shiftOptions = [
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
  ];

  currentDate: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  generateReport() {
    if (this.reportForm.valid) {
      console.log('Generating report...');
      console.log('Shift:', this.selectedShift?.value);
      console.log('Start Date:', this.startDate);
      console.log('End Date:', this.endDate);
    } else {
      console.log('Form is invalid. Cannot generate report.');
    }
  }
}
