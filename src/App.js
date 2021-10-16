import "./App.css";
import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import DisplayComponent from "./components/DisplayComponent";
import BtnComponent from "./components/BtnComponent";

function App() {
	const [time, setTime] = useState(0);
	const [watchOn, setWatchOn] = useState(false);
	const [status, setStatus] = useState(0);

	useEffect(() => {
		const unsubscribe = new Subject();
		interval(10)
			.pipe(takeUntil(unsubscribe))
			.subscribe(() => {
				if (watchOn) {
					setTime((val) => val + 1);
				}
			});
		return () => {
			unsubscribe.next();
			unsubscribe.complete();
		};
	}, [watchOn]);

	const handleStart = () => {
		setWatchOn((prevState) => !prevState);
		setStatus(1);
	};

	const handleResume = () => {
		handleStart();
	};

	const handleStop = () => {
		if (time !== 0) {
			setWatchOn(false);
		}
		setStatus(2);
	};

	const handleReset = () => {
		setTime(0);
		setWatchOn(false);
		setStatus(0);
	};

	return (
		<div className="App">
			<div className="main-section">
				<div className="clock-holder" onDoubleClick={handleStop}>
					<div className="app-title">Stopwatch</div>
					<div className="stopwatch">
						<DisplayComponent time={time} />
						<BtnComponent
							start={handleStart}
							stop={handleStop}
							reset={handleReset}
							resume={handleResume}
							status={status}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
