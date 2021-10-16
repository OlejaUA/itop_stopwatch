import React from "react";

function BtnComponent({ start, stop, reset, resume, status }) {
	return (
		<div>
			{status === 0 ? (
				<button className="stopwatch-btn stopwatch-btn-blu" onClick={start}>
					Start
				</button>
			) : (
				""
			)}

			{status === 1 ? (
				<div>
					<button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
						Stop
					</button>

					<button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
						Reset
					</button>
				</div>
			) : (
				""
			)}

			{status === 2 ? (
				<div>
					<button className="stopwatch-btn stopwatch-btn-blu" onClick={resume}>
						Resume
					</button>

					<button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>
						Reset
					</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default BtnComponent;
