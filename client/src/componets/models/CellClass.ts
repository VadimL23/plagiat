import { BoardClass } from './BoardClass';
import { Colors } from './colors';
import FigureClass from './figures/FigureClass';

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

	isEmpty(): boolean {
		return this.figure === null;
	}

	isEnemy(target: CellClass): boolean {
		if (target.figure) return target.figure?.color !== this.figure?.color;
		return false;
	}

	isEmptyVertical(target: CellClass): boolean {
		if (this.x !== target.x) {
			return false;
		}

		const min = Math.min(this.y, target.y);
		const max = Math.max(this.y, target.y);
		for (let y = min + 1; y < max; y++) {
			if (!this.board.getCell(this.x, y).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	isEmptyHorizontal(target: CellClass): boolean {
		if (this.y !== target.y) {
			return false;
		}

		const min = Math.min(this.x, target.x);
		const max = Math.max(this.x, target.x);
		for (let x = min + 1; x < max; x++) {
			if (!this.board.getCell(x, this.y).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	isEmptyDiagonal(target: CellClass): boolean {
		const absX = Math.abs(target.x - this.x);
		const absY = Math.abs(target.y - this.y);
		if (absY !== absX) {
			return false;
		}
		const dy = this.y < target.y ? 1 : -1;
		const dx = this.x < target.x ? 1 : -1;
		for (let i = 1; i < absY; i++) {
			if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	setFigure(figure: FigureClass) {
		// так как использована кольцевая зависисмость figure знает о cell и наоборот
		this.figure = figure;
		this.figure.cell = this;
	}

	addLostFigure(figure: FigureClass) {
		figure.color === Colors.BLACK
			? this.board.lostBlackFigures.push(figure)
			: this.board.lostWhiteFigures.push(figure);
	}

	moveFigure(target: CellClass) {
		if (this.figure && this.figure.canMove(target)) {
			this.figure.moveFigure(target);
			if (target.figure) {
				this.addLostFigure(target.figure);
			}
			target.setFigure(this.figure); // target.figure = this.figure;
			this.figure = null;
		}
	}
}
