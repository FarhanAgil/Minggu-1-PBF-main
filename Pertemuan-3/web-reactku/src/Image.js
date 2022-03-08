import React, {Component} from "react";
class Image extends Component {
    render() {
        return (
            <img src={this.props.linkgambar} alt="Food" width='500' />
        );
    }
}
export default Image;