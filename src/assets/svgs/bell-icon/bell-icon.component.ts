import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-bell-icon',
	templateUrl: './bell-icon.component.html',
	styleUrls: ['../svgs.component.css']
})
export class BellIconComponent {
	@Input() bellWidth: string = '25'
	@Input() bellHeight: string = '25'
}
