import { Component } from '@angular/core';
//  import {faCab} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  //  faCab = faCab;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter
  faPhone =faPhone
  faEnvelope  =faEnvelope 
 
}
