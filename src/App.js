import React, { Component, Fragment, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { lazy } from "react";
import { connect } from "react-redux";
import { SET_CREDENTIALS, SET_TOKEN } from "./redux/action/type";
import { createAction } from "./redux/action";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./Loading";

const MovieList = React.lazy(()=> import('./pages/MovieList'));
const UserList = React.lazy(()=>import("./pages/UserList")) ;
const SignIn = React.lazy(()=>import("./pages/SignIn")) ;
const ShowTime = React.lazy(()=>import("./pages/ShowTime")) ;
const Home = React.lazy(()=>import("./pages/Home")) ;



class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <Suspense fallback={<div>
        <Loading/>
      </div>}>
        <Switch>
          {!this.props.token ? (
            <Fragment>
              <Route path="/" component={SignIn} />
            </Fragment>
          ) : (
            <Fragment>
              <Route exact path="/lichchieu" component={ShowTime} />
              <Route exact path="/nguoidung" component={UserList} />
              <Route exact path="/phim" component={MovieList} />
              <Route exact path="/dangnhap" component={SignIn} />
              <Route exact path="/" component={Home} />
            </Fragment>
          )}
        </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("t");
    const object =JSON.parse(localStorage.getItem("o")) ;
    
    if (token ) {
      this.props.dispatch(createAction(SET_CREDENTIALS, object));
      this.props.dispatch(createAction(SET_TOKEN, token));
      
    }
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.credentials.token,
  };
};

export default connect(mapStateToProps)(App);
