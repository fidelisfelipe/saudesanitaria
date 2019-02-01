import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.onepage.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {
				
	}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
