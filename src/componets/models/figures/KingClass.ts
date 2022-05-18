import { Colors } from '../colors';
import FigureClass, { FigureNames } from './FigureClass';
import { CellClass } from '../CellClass';
import white_logo from '../../../assets/images/king_white.png';
import black_logo from '../../../assets/images/king_black.png';

export default class KingCalss extends FigureClass {
	constructor(color: Colors, cell: CellClass) {
		super(color, cell);
		this.name = FigureNames.KING;
		this.logo = this.color === Colors.WHITE ? white_logo : black_logo;
	}

	canMove(target: CellClass): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (
			((target.x === this.cell.x + 1 && target.y === this.cell.y) ||
				(target.x === this.cell.x - 1 && target.y === this.cell.y) ||
				(target.x === this.cell.x && target.y === this.cell.y + 1) ||
				(target.x === this.cell.x && target.y === this.cell.y - 1) ||
				(target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
				(target.x === this.cell.x - 1 && target.y === this.cell.y + 1) ||
				(target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
				(target.x === this.cell.x - 1 && target.y === this.cell.y - 1)) &&
			(this.cell.board.getCell(target.x, target.y).isEmpty() || this.cell.isEnemy(target))
		)
			return true;

		return false;
	}
}
