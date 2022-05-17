import { BoardClass } from './BoardClass';
import { Colors } from './colors';
import { FigureClass } from './figures/FigureClass';

export class CellClass {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	figure: FigureClass | null;
	board: BoardClass;
	avaliable: boolean; // can have position on this
	id: number; //for keys

	constructor(
		board: BoardClass,
		x: number,
		y: number,
		color: Colors,
		figure: FigureClass | null
	) {
		this.x = x;
		this.y = y;
		this.board = board;
		this.color = color;
		this.figure = figure;
		this.id = Math.trunc(Math.random() * 1000);
		this.avaliable = false;
	}
}
