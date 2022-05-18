import React, { FC, useState, useRef, useEffect } from 'react';
import { Colors } from '../models/colors';
import { Player } from '../models/PlayersClass';

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}

const TimerComponent: FC<TimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState(300);
	const [whiteTime, setWhiteTime] = useState(300);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	useEffect(() => {
		startTimer();
	}, [currentPlayer]);

	function startTimer() {
		if (timer.current) {
			clearInterval(timer.current);
		}
		const cb = currentPlayer?.color === Colors.WHITE ? decWhiteTimer : decBlackTimer;

		timer.current = setInterval(cb, 1000);
	}

	function decBlackTimer() {
		setBlackTime((prev) => prev - 1);
	}

	function decWhiteTimer() {
		setWhiteTime((prev) => prev - 1);
	}

	function handleRestart() {
		setWhiteTime(300);
		setBlackTime(300);
		restart();
	}

	return (
		<div className="timerContainer">
			<div>
				<button className="btn_restart" onClick={handleRestart}>
					Restart game
				</button>
			</div>
			<h2>Черные - {blackTime}</h2>
			<h2>Белые - {whiteTime}</h2>
		</div>
	);
};

export { TimerComponent };
