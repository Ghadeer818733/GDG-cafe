import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    ;
  }
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter
  faPhone =faPhone
  faEnvelope  =faEnvelope 
  faGithub = faGithub
  faGoogle = faGoogle
}
