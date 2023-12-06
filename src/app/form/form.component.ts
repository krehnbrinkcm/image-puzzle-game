import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  model: any = {};

  constructor(private router: Router, private communicationService: CommunicationService) { }

  onSubmit(form: NgForm) {
    const imageTerms = [
      this.model.imageTerm1,
      this.model.imageTerm2,
      this.model.imageTerm3,
      this.model.imageTerm4,
    ];

    this.communicationService.setImageTerms(imageTerms);
    this.router.navigate(['/picture-board']);
  }
}