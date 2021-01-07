import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom";
import { Col, Row } from 'antd';

import Home   from './Home';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Forgot from './auth/Forgot';
import SideBar from './SideBar'
import About from './About';
import Profile from './user/Profile';
import Bucket from './bucket/Bucket';
import NotFound from './error/NotFound';
import Table from './bucket/Table';


function App() {

  return (
    <Router>
      <div>
        <Row className='navBar-header'>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <SideBar />
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
        </Row>

        {/* ROUTER */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/password-forgot' component={Forgot} />
          <Route path='/about' component={About} />
          <Route path='/profil' component={Profile} />
          <Route path='/bucket/:id' component={Bucket} />
          <Route path='/mybucket' component={Table} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
          {/* <Route path='/blob/:id' component={Bucket} /> */}
          {/* <Route path='/blo' component={Login}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
