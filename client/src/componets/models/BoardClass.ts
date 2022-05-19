import { CellClass } from './CellClass';
import { Colors } from './colors';
import QueenClass from './figures/QueenClass';
import PawnClass from './figures/PawnClass';
import KingClass from './figures/KingClass';
import BishopClass from './figures/BishopClass';
import RookClass from './figures/RookClass';
import KnightClass from './figures/KnightClass';
import FigureClass from './figures/FigureClass';

export class BoardClass {
	cells: CellClass[][];
	lostBlackFigures: FigureClass[] = [];
	lostWhiteFigures: FigureClass[] = [];

	constructor() {
		this.cells = [];
	}

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

	/** В цикле получаем ячейку(проверяем все ячейки на доске) target, затем изменяем поле avaliable у этой ячейки
	 * чтобы определить доступна она для хода или нет.
	 * Мы получаем фигуру, которая стоит на выбранной ячейке и вызываем у нее метод canMove. canMove возвращает
	 * либо ture, если фигура может походить либо false. В качестве ячейки на которую хотим походить мы передаем target
	 */

	public highlightCells(selectedCell: CellClass | null) {
		for (let i = 0; i < 8; i++) {
			const row = this.cells[i];
			if (row)
				for (let j = 0; j < 8; j++) {
					const target = row[j];
					target.avaliable = !!selectedCell?.figure?.canMove(target);
				}
		}
	}

	public getCopyBoard(): BoardClass {
		const newBoard = new BoardClass();
		newBoard.cells = this.cells;
		newBoard.lostBlackFigures = this.lostBlackFigures;
		newBoard.lostWhiteFigures = this.lostWhiteFigures;
		return newBoard;
	}

	public getCell(x: number, y: number) {
		return this.cells[y][x];
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new PawnClass(Colors.BLACK, this.getCell(i, 1));
			new PawnClass(Colors.WHITE, this.getCell(i, 6));
		}
	}

	private addKings() {
		new KingClass(Colors.BLACK, this.getCell(4, 0));
		new KingClass(Colors.WHITE, this.getCell(4, 7));
	}

	private addBishops() {
		new BishopClass(Colors.BLACK, this.getCell(2, 0));
		new BishopClass(Colors.BLACK, this.getCell(5, 0));
		new BishopClass(Colors.WHITE, this.getCell(2, 7));
		new BishopClass(Colors.WHITE, this.getCell(5, 7));
	}

	private addRooks() {
		new RookClass(Colors.BLACK, this.getCell(0, 0));
		new RookClass(Colors.BLACK, this.getCell(7, 0));
		new RookClass(Colors.WHITE, this.getCell(0, 7));
		new RookClass(Colors.WHITE, this.getCell(7, 7));
	}

	private addQueens() {
		new QueenClass(Colors.BLACK, this.getCell(3, 0));
		new QueenClass(Colors.WHITE, this.getCell(3, 7));
	}

	private addKnights() {
		new KnightClass(Colors.BLACK, this.getCell(1, 0));
		new KnightClass(Colors.BLACK, this.getCell(6, 0));
		new KnightClass(Colors.WHITE, this.getCell(1, 7));
		new KnightClass(Colors.WHITE, this.getCell(6, 7));
	}

	public addFigurs() {
		this.addBishops();
		this.addKings();
		this.addKnights();
		this.addPawns();
		this.addQueens();
		this.addRooks();
	}
}
