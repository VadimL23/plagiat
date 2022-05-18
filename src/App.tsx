import React, { useEffect, useState } from 'react';
import { Board } from './componets/Board';
import { BoardClass } from './componets/models/BoardClass';
import { Colors } from './componets/models/colors';
import { Player } from './componets/models/PlayersClass';
import { LostFigures } from './componets/LostFigures';
import { TimerComponent } from './componets/TimerComponent';
import { CellClass } from './componets/models/CellClass';
import { Modal } from './componets/Modal';

function App() {
	const [board, setBoard] = useState(new BoardClass());
	const [whitePlayer, setWhitePlayer] = useState<Player>(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState<Player>(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
	const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

	useEffect(() => {
		restart();
		setCurrentPlayer(whitePlayer);
	}, []);

	function restart() {
		const newBoard = new BoardClass();
		newBoard.initCells();
		newBoard.addFigurs();
		setBoard(newBoard);
		setCurrentPlayer(whitePlayer);
		setSelectedCell(null);
	}

	function swapPlayer() {
		setCurrentPlayer(currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer);
	}

	return (
		<div className="app">
			<TimerComponent currentPlayer={currentPlayer!} restart={restart} />
			<Board
				board={board}
				setBoard={setBoard}
				swapPlayer={swapPlayer}
				currentPlayer={currentPlayer}
				selectedCell={selectedCell}
				setSelectedCell={setSelectedCell}
			/>
			<div>
				<LostFigures title="Черные фигуры" figures={board.lostBlackFigures}></LostFigures>
				<LostFigures title="Белые фигуры" figures={board.lostWhiteFigures}></LostFigures>
			</div>
			<Modal
				callbackBtn={restart}
				isOpen={false}
				title="Player Win!"
				onModalClose={() => {
					restart();
				}}
			/>
		</div>
	);
}

export default App;
