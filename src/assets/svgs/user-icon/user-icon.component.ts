import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user-icon',
	templateUrl: './user-icon.component.html',
	styleUrls: ['../svgs.component.css']
})
export class UserIconComponent {
	@Input() userWidth: string = '25';
	@Input() userHeight: string = '25';
}
