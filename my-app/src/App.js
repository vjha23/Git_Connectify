import React, { createContext, useContext, useEffect, useReducer } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PostScreen from './components/PostScreen';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import UploadPost from './screens/UploadPost';
import Profile from './screens/Profile';
import { reducer, initialState } from './reducer/userReducer'


export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch({ type: 'USER', payload: user })
    } else {
      history.push('/signin')
    }
  }, [])

  return (

    <Switch>
      <Route exact path='/'>
        <div className="container">
          <Navbar />
          <Sidebar />
          <PostScreen />
        </div>
      </Route>

      <Route path='/signin'>
        <SignIn />
      </Route>

      <Route path='/signup'>
        <SignUp />
      </Route>

      <Route path='/upload'>
        <div className="cardContainer">
          <Navbar />
          <Sidebar />
          <div className='uploadPost'>
            <UploadPost />
          </div>
        </div>
      </Route>

      <Route path='/profile'>
        <Navbar />
        <Profile />
      </Route>
    </Switch>

  );

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
