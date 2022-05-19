import { Colors } from '../colors';
import FigureClass, { FigureNames } from './FigureClass';
import { CellClass } from '../CellClass';
import white_logo from '../../../assets/images/bishop_white.png';
import black_logo from '../../../assets/images/bishop_black.png';

export default class BishopClass extends FigureClass {
	constructor(color: Colors, cell: CellClass) {
		super(color, cell);
		this.name = FigureNames.BISHOP;
		this.logo = this.color === Colors.WHITE ? white_logo : black_logo;
	}

	canMove(target: CellClass): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (this.cell.isEmptyDiagonal(target)) return true;
		return false;
	}
}
