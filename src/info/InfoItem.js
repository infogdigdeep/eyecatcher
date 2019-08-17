import React from 'react';

const Info = props => {
  return (
    <div className="info">
      <div className="info-title">
        {props.info.title}
      </div>
      <div className="info-body">
        {props.info.body}
      </div>
    </div>
  );
}

export default Info;
