import React, {
	Component
} from 'react';

import './frame.less';

import Header from './header/header.js';
import Footer from './footer/footer.js';
// import Player from './player/player.js';

export default class Frame extends Component {
	render() {
		return (
			<div className="frame">
				<Header/>
				{this.props.children}
				<Footer/>
      		</div>
		);
	}
}