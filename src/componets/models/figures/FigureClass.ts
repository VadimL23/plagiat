import React from 'react';
import logo from '../../../assets/images/chess_.png';
import { Colors } from '../colors';
import { CellClass } from '../CellClass';

export const enum FigureNames {
	FIGURE = 'Фигура',
	KING = 'Король',
	KNIGHT = 'Конь',
	PAWN = 'Пешка',
	QUEEN = 'Королева',
	ROOK = 'Ладья',
	BISHOP = 'Слон'
}

export default class FigureClass {
	color: Colors;
	logo: typeof logo | null;
	cell: CellClass;
	name: FigureNames;
	id: number;

	constructor(color: Colors, cell: CellClass) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE;
		this.id = Math.trunc(Math.random());
	}

	canMove(target: CellClass): boolean {
		if (target.figure?.color === this.color) {
			return false;
		}
		if (target.figure?.name === FigureNames.KING) {
			return false;
		}
		return true;
	}

	moveFigure(target: CellClass) {}
}
