import React, {
	Component
} from 'react';

export default class Frame extends Component {
	render() {
		return (
			<div>
				<div className="header"></div>
				{this.props.children}
      		</div>
		);
	}
}