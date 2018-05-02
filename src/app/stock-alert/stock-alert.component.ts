import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

/**
 * Dialog component for stock alert
 * Dialog will show up if stock validation failed
 */
@Component({
  selector: 'stock-alert',
  templateUrl: './stock-alert.component.html',
  styleUrls: ['./stock-alert.component.css']
})
export class StockAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
