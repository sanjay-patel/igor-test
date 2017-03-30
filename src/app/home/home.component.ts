import { Component, OnInit } from '@angular/core';
import { NgGridConfig, NgGridItemConfig } from 'angular2-grid';

interface Box {
    id: number;
    config: any;
    text: any;
}

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  	private boxes: Array<Box> = [];
	// private rgb: string = '#efefef';
	private curNum;
	public gridConfig: NgGridConfig = <NgGridConfig>{
		'margins': [5],
		'draggable': true,
		'resizable': true,
		'max_cols': 0,
		'max_rows': 0,
		'visible_cols': 0,
		'visible_rows': 0,
		'min_cols': 1,
		'min_rows': 1,
		'col_width': 2,
		'row_height': 2,
		'cascade': 'up',
		'min_width': 50,
		'min_height': 50,
		'fix_to_grid': false,
		'auto_style': true,
		'auto_resize': false,
		'maintain_ratio': false,
		'prefer_new': false,
		'zoom_on_drag': false,
		'limit_to_screen': true
	};
	// private itemPositions: Array<any> = [];

	constructor() {
		const dashconf = this._generateDefaultDashConfig();
		for (var i = 0; i < dashconf.length; i++) {
			const conf = dashconf[i];
			conf.payload = 1 + i;
			// console.log('conf called====', conf);
            this.boxes[i] = { id: i + 1, config: conf, text: 'Vel pellentesque amet Nulla libero Fusce Donec et nunc Curabitur In. Nunc gravida magna et et justo Ut cursus Phasellus at tristique. Curabitur id natoque tincidunt purus vestibulum ac a Pellentesque nulla Aenean. Adipiscing mauris id Curabitur amet platea Aliquam In at Donec tempus. Vitae et consectetuer libero elit adipiscing pretium Donec eget Nullam commodo. Ac ut Curabitur In tincidunt ligula congue consequat at enim amet.' };     
		}
		this.curNum = dashconf.length + 1;
	}
    ngOnInit() {}
	 /*
    addBox(): void {
		const conf: NgGridItemConfig = this._generateDefaultItemConfig();
		conf.payload = this.curNum++;
		this.boxes.push({ id: conf.payload, config: conf });
	}  

	private _generateDefaultItemConfig(): NgGridItemConfig {
		return { 'dragHandle': '.handle', 'col': 1, 'row': 0, 'sizex': 1, 'sizey': 1 };
	}  */

	private _generateDefaultDashConfig(): NgGridItemConfig[] {
		return [{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 30, 'sizey': 15 },
		{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 30, 'sizey': 15  },
		{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 30, 'sizey': 15  }];
	}
}
