import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Aux from '../Aux';
import classes from './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
//   state = {
//     showSideDraw: false
//   }
//   sideDrawerClosedHandler = () => {
//     this.setState({showSideDraw: false})
//   }
//   toggleDrawerHandler = () => {
//     this.setState((prevState) => {
//       return {showSideDraw : !prevState.showSideDraw };
//     })
//   }

  render() {
    return (
      <Aux>
      {/* <div>
        <Toolbar isAuth={this.props.isAuthenticated} drawerToggle={this.toggleDrawerHandler}/>
        <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDraw} closed={this.sideDrawerClosedHandler}/>
      </div> */}
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   }
// }

export default Layout;