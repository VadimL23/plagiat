import { Colors } from '../colors';
import FigureClass, { FigureNames } from './FigureClass';
import { CellClass } from '../CellClass';
import white_logo from '../../../assets/images/pawn_white.png';
import black_logo from '../../../assets/images/pawn_black.png';

export default class PawnCalss extends FigureClass {
	isFirstStep: boolean = true;

	constructor(color: Colors, cell: CellClass) {
		super(color, cell);
		this.name = FigureNames.PAWN;
		this.logo = this.color === Colors.WHITE ? white_logo : black_logo;
	}

	canMove(target: CellClass): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
		const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;
		if (
			(target.y === this.cell.y + direction ||
				(this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		)
			return true;
		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		)
			return true;
		return false;
	}

	moveFigure(target: CellClass): void {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}
