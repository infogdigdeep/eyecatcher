import React from 'react';
import { Component } from 'react';
import InfoList from './InfoList';

const INFO_TYPE = ['Books'];

class InfoPage extends Component {

  renderInfoList () {
      const { infos } = this.props;
      return INFO_TYPE.map(type => {
        const infosWithType = infos.filter( info => info.type === type);
        return <InfoList key={type} type={type} infos={infosWithType[0].infos}/>;
        });
  };

  render() {
    return (
      <div className="task">
        <div className="taskList">
          {this.renderInfoList()}
        </div>
      </div>
    )
  }
}

export default InfoPage;
