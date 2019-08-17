import React, {Component} from 'react';
import {connect} from 'react-redux';
import InfoPage from '../info/InfoPage';


class App extends Component {
  render() {
    return (
      <div className="main">
        <InfoPage infos={this.props.infos}/>
      </div>
    );
  }
}

function mapStatesToProps(state) {
    return {
      infos : state.infos
    }
  }


export default connect(mapStatesToProps)(App);
