import React, { Component } from 'react';

import Jobs from '../jobs';
import Experience from '../experience';

class App extends Component {
	render() {
		return [
			<div className="row bottom-xs">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 start-lg bottom-lg start-md center-sm center-xs middle-xs">
					<h1 tabIndex={0}>Aaron Lote</h1>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 end-lg end-md center-sm center-xs">
					<p>
						<a href="https://www.github.com/azz0r" rel="noopener noreferrer" target="_blank" tabIndex={0}>
							github.com/azz0r
						</a>
					</p>
					<p>
						<a href="mailto:mail@wuggawoo.com" tabIndex={0}>
							mail@wuggawoo.com
						</a>
					</p>
				</div>
			</div>,
			<div className="row">
				<div className="col-xs-12 col-lg">
					<p tabIndex={0}>
						I'm a London based senior web developer with 10 years commercial experience working companies of all sizes
						to deliver high quality web experiences to millions of customers.
					</p>
					<br />
					<p tabIndex={0}>
						With my varied experience I have a valuable ability to understand a task from the perspective of
						a developer, a project manager or a stake holder.
					</p>
					<br />
					<p tabIndex={0}>
						I’m experienced with implementing standards and processes to improve workflows and productivity for both developers
						and web dev leaders.
					</p>
					<br />
					<Experience />
					<br />
				</div>
				<div className="col-xs">
					<Jobs />
				</div>
			</div>
		];
	}
}

export default App;
