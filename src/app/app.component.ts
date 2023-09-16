import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Transformer } from 'src/algorithm/transformer';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'SiRTePuF';

  @ViewChild('text', {read: ElementRef}) textToConvert!: ElementRef<HTMLInputElement>;

  private converter = new Transformer();

  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private toastr: ToastrService, private clipboard: Clipboard) {
    matIconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/github.svg'));
    matIconRegistry.addSvgIcon('trx', sanitizer.bypassSecurityTrustResourceUrl('https://cryptologos.cc/logos/tron-trx-logo.svg?v=026'));
    matIconRegistry.addSvgIcon('btc', sanitizer.bypassSecurityTrustResourceUrl('https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026'));
    matIconRegistry.addSvgIcon('eth', sanitizer.bypassSecurityTrustResourceUrl('https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026'));
  }

  onDonationCopy(wallet: string) {
    if (this.clipboard.copy(wallet)) this.toastr.success(`Copied wallet: ${wallet}`);
    else this.toastr.error(`Error copying wallet: ${wallet}`)
  }

  onSubmit() {
    this.textToConvert.nativeElement.value = this.converter.transform(this.textToConvert.nativeElement.value);
  }

  onTextCopy() {
    if (this.clipboard.copy(this.textToConvert.nativeElement.value)) this.toastr.success("Copied!");
    else this.toastr.error("Copying error :(")
  }
}
