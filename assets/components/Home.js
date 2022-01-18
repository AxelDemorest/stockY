import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <p className="btn btn-danger">Hello</p>
                            </li>

                            <li className="nav-item">
                                <p>Hello</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Home;