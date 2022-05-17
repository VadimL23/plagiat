import React, { useEffect, useState } from 'react';
import { Board } from './componets/Board';
import { BoardClass } from './componets/models/BoardClass';

function App() {
	const [board, setBoard] = useState(new BoardClass());

	useEffect(() => {
		restart();
	}, []);

	function restart() {
		const newBoard = new BoardClass();
		newBoard.initCells();
		setBoard(newBoard);
	}

	return (
		<div className="app">
			<Board board={board} setBoard={setBoard} />
		</div>
	);
}

export default App;
