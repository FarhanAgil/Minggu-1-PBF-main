import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props; return (
            <div>
                <div class="px-2 bg-light "><marquee class="py-3" direction="right" onmouseover="this.stop()" onmouseout="this.start()"scrollamount="20">
                  <h1>Selamat datang di perkuliahan pada mata kuliah Pemrograman Berbasis Framework dengan bahasa react js dan ini merupakan bab firebase login
                      </h1></marquee>
                </div>
                <div class="px-2 bg-light "><marquee class="py-3" direction="left" onmouseover="this.stop()" onmouseout="this.start()"scrollamount="20">
                  <h1>Hello this is moch farchan agil in the house yo
                      </h1></marquee></div>
                <button onClick={this.handleLogout}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
            </div>
        );
    }
} function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
} export default connect(mapStateToProps)(Home);