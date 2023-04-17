import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})


export class FormComponent {

	form: FormGroup = new FormGroup({
		first_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
		last_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
		email: new FormControl("", [Validators.required]),
	})

	get first_name() { return this.form.get('first_name'); }
	get last_name() { return this.form.get('last_name'); }
	get email() { return this.form.get('email'); }


	closeResult = '';

	constructor(private modalService: NgbModal) { }

	open(content: any) {
		this.modalService.open(content, { size: 'lg' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


	clearForm() {
		this.form.reset();
	}

	alert(){
		alert('Form has been submited!');
	}

}
