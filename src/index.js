import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Headers from './Header/Header'
import registerServiceWorker from './registerServiceWorker';
class Index extends React.Component {
  render() {
    return (
      <div>
        <Headers/>
        <App/>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
