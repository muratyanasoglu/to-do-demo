import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './components/style.css';
import Notification from './components/Notification';


class App extends React.Component {
    state = {
        darkMode: false,
    };

    toggleTheme = () => {
        this.setState({ darkMode: !this.state.darkMode });
    };

    componentDidMount() {
        // Example: Notify users of an upcoming deadline when the component mounts
        Notification('warning', 'Deadline Approaching', 'Your project deadline is in 3 days.');
    }
    render() {
        const themeStyle = {
            backgroundColor: this.state.darkMode ? 'black' : 'white',
            color: this.state.darkMode ? 'white' : 'black',
        };

        return (
            <div className="app" style={themeStyle}>
                <Header darkMode={this.state.darkMode} toggleTheme={this.toggleTheme} />
                {/* Other components will go here */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
