import { CellClass } from './CellClass';
import { Colors } from './colors';

export class BoardClass {
	cells: CellClass[][] = [];

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: CellClass[] = [];
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new CellClass(this, j, i, Colors.BLACK, null));
				} else {
					row.push(new CellClass(this, j, i, Colors.WHITE, null)); // white
				}
			}
			this.cells.push(row);
		}
	}
}
