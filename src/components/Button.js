import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button className={"btn btn-" + (this.props.type ? (this.props.type) : 'primary') + " btn-" + (this.props.size ? (this.props.size) : 'md')} disabled={this.props.disabled} >{this.props.title}</button>
        );
    }
};

export default Button;