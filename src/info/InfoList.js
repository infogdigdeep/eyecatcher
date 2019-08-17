import React from 'react';
import Info from 'InfoItem';

const InfoList = props => {
  return (
    <div className="infoList">
      <div className="infoListTitle">
        {props.infoList.title}
      </div>
      props.infoList.infos.map (info => {
        <Info key={info.id} info={info}/>
      })
    </div>
  );
}

export default InfoList;
