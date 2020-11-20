import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './components/PageNotFound';
import Main from './components/Main';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Detail from './pages/Detail';

import {data} from './data';

function App() {
	return (
		<ErrorBoundary>
			<Main
				logo = {data.site.logoImage}
				title = {data.site.title}
				userName = {data.profile.firstName}
			>
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props} data={data.data}/>}/>
					<Route path='/profile' render={(props) => <Profile {...props} data={data.profile} />}/>
					<Route path='/detail/:id' render={(props) => <Detail {...props} data={data.data}/>}/>
            		<Route component={PageNotFound} />
				</Switch>
			</Main>
		</ErrorBoundary>
	);
}

// ***** 
// Notes for feature implementation
// *****
// 
// Based on the succinct description of this exercise, 
// my design decisions has thus been keeping everything
// as vanilla as possible. 
//
// I.e. avoid use of other node librarys such as 
// `webpack`, `babel`, `sass` as one likely would in 
// larger projects, with the exception of react-router.
// Usage of CSS3 features are also refrained to avoid 
// compatibility issues since this has not been addressed
// in the description, and the initial `browserlist` 
// state has been quite strict. E.g. flex, grid, selectors

export default App;
