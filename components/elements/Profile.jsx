import React from 'react';

const Profile = ({image, name, description, college, job, id}) => {

    return(
      <div className="profile-card flex-col">
          <div className="row profile-card-row">
              <div className="avatar-wrapper" id={id} style={{backgroundImage: 'url(' + image + ')'}}>
                  {/*<img src={image} className="avatar-image"/>*/}
              </div>
              <div className="info-group">
                  <div className="profile-card-name"><strong>{name}</strong></div>
                  {/*<br/>*/}
                  {/*<br />*/}
                  <div className="profile-card-college">{college}</div>
                  {job ? job : ''}
              </div>
          </div>
          <div className="profile-card-blurb">
              {description}
          </div>
      </div>
    );

};

export default Profile;
