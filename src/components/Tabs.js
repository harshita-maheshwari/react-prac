import React, { Component } from "react";

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTab1: true,
            showTab2: false
        }
    }
    showTab1Func() {
        this.props.showTab1 = true;
    }
    showTab2Func() {
        this.props.showTab1 = false;
    }
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button onClick={this.showTab1Func}>Option 1</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.showTab2Func}>Option 2</button>
                    </li>
                </ul>
                <div className="tab-content">
                    {this.props.showTab1 ? (
                        <div className="nav-content-1" >
                            Some Content 1
                    </div>
                    ) : (
                            <div className="nav-content-2">
                                Some Content 2
                    </div>
                        )}
                </div>
            </div>
        );
    }
};

export default Tabs;