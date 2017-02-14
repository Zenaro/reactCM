import React, {
	Component
} from 'react';

export default class Frame extends Component {
	render() {
		return (
			<div>
				Frame
				{this.props.children}
      		</div>
		);
	}
}