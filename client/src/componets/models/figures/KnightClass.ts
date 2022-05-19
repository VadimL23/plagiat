import { Colors } from '../colors';
import FigureClass, { FigureNames } from './FigureClass';
import { CellClass } from '../CellClass';
import white_logo from '../../../assets/images/knight_white.png';
import black_logo from '../../../assets/images/knight_black.png';

export default class KnightCalss extends FigureClass {
	constructor(color: Colors, cell: CellClass) {
		super(color, cell);
		this.name = FigureNames.KNIGHT;
		this.logo = this.color === Colors.WHITE ? white_logo : black_logo;
	}

	canMove(target: CellClass): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
	}
}
