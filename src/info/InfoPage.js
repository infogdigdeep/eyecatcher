import React from 'react';
import InfoList from './InfoList';

class InfoPage extends Component {
  const INFO_TYPE = ['weather'];

  renderInfoList () {
      const { infos } = this.props;
      return INFO_TYPE.map(type => {
        const infosWithType = infos.filter( info => info.type === type);
        return <InfoList key={type} type={type} infos={infosWithType}/>;
        });
      });
  }

  render() {
    return (
      <div className="task">
        <div className="taskList">
          {renderInfoList()}
        </div>
      </div>
    )
  }
}

export default InfoPage;
