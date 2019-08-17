import React from 'react';
import Info from './InfoItem';

const InfoList = props => {
  return (
    <div className="infoList">
      {
        props.infos.map(info => {
          <Info key={info.id} info={info} />
        })
      }
    </div>
  );
}

export default InfoList;
