import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import News from './components/News'
import Login from './components/Login'
import LinkButton from './components/LinkButton'

import PrivateRouter from './containers/PrivateRouter'
import ProfileContainer from './containers/ProfileContainer'

const RootRouter = () => {
    return (
        <div>
            <header>
                <div>
                    <LinkButton path='/' lable='Home' />
                    <LinkButton path='/profile' lable='Profile' />
                    <LinkButton path='/news' lable='News' />
                    <LinkButton path='/login' lable='Login' />
                </div>
            </header>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/news' component={News} />
                <Route path='/login' component={Login} />
                <PrivateRouter path='/profile' component={ProfileContainer} />
                <Route render={()=> <h2>nothing page</h2>} />
            </Switch>
        </div>
    )
}

export default RootRouter































// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
// import CssBaseline from '@material-ui/core/CssBaseline';

// import Home from './components/Home'
// import News from './components/News'

// import LinkButton from './components/LinkButton'
// import ProfileContainer from './containers/ProfileContainer'
// import PrivateRoute from './containers/PrivateRoute'
// import LoginContainer from './containers/LoginContainer'

// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <CssBaseline>
//         <div className="App">

//           <header>
//             <div style={{ display: 'inline-flex' }}>
//               <LinkButton to='/' label='Головна' />
//               <LinkButton to='/profile' label='Профіль' />
//               <LinkButton to='/news' label='Новини' />
//               <LinkButton to='/login' label='Логін' />
//             </div>
//           </header>
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/login' component={LoginContainer} />
//             <Route path='/news' component={News} />

//             <PrivateRoute path='/profile' component={ProfileContainer} />
//             <Route render={() => <h1>not found page</h1>} />
//           </Switch>
//         </div>
//       </CssBaseline>

//     );
//   }
// }

// export default App;
