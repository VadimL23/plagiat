import React, { FC, useState, useEffect } from 'react';
import s from './style.module.scss';
import cn from 'classnames';
import { Cell } from '../Cell';
import { BoardClass } from '../models/BoardClass';
import { CellClass } from '../models/CellClass';

interface BoarProps {
	board: BoardClass;
	setBoard: (board: BoardClass) => void;
}

const Board: FC<BoarProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

	function click(cell: CellClass) {
		if (selectedCell && selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			updateBoard();
		} else {
			setSelectedCell(cell);
		}
	}

	/**
	 * highlightCells --> В методе подсчитываем на какие ячейки фигура может перемещаться в данный момент.
	 * Но делаем мы это внутри модели, поэтоне проиходит перерисовка.
	 * Для того чтобы реакт перерисовал компонент мы вызываем метод updateBoard, в котором меняем состояние.
	 * highlightCells вызывается в useEffect.
	 */

	function highlightCells() {
		if (selectedCell) {
			board.highlightCells(selectedCell); // так как изменение состояния highlightCells не вызывает перерендеринг, то вызываем updateBoard
		}
		updateBoard();
	}

	useEffect(() => {
		highlightCells();
	}, [selectedCell]);

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	return (
		<div className={cn('board')}>
			{board.cells.map((row, index) => {
				return (
					<React.Fragment key={index}>
						{row.map((cell) => (
							<Cell
								cell={cell}
								key={cell.id}
								selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
								click={click}
							/>
						))}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export { Board };
