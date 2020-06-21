import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'cmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  codes: { time: string; result: string }[] = [];
  r = [];
  allowFormats: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
  ];
  scanSuccess(scanResult: string) {
    const n = new Date();
    this.codes.push({
      time: `${n.toLocaleDateString()} ${n.toLocaleTimeString()}`,
      result: scanResult,
    });
  }
}
