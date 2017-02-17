import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	browserHistory
} from 'react-router';

import Frame from './Frame/Frame';
import Home from './Home/Home';
import Users from './Users/Users';
import NoMatch from './NoMatch/NoMatch';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route component={Frame}>
			<Route path="/" component={Home}/>
			<Route path="/users" component={Users}/>
		</Route>
		{<Route path="*" component={NoMatch}/>}
	</Router>,
	document.getElementById('root')
);