import React from 'react';
import './UserData.css';

const UserData = ({data}) => {
    return (
        <div className="user-content">
        <img src={data.avatar_url} alt={data.name} className="user-image"/>
        <table className="user-data">
          <tbody>
            <tr className="rows">
              <td className="user-data-title"><strong>Name:</strong></td>
              <td>{data.name}</td>
            </tr>
            <tr className="rows">
              <td className="user-data-title"><strong>Localização:</strong></td>
              <td>{data.location}</td>
            </tr>
            <tr className="rows">
              <td className="user-data-title"><strong>Bio:</strong></td>
              <td>{data.bio}</td>
            </tr>
            <tr className="rows">
              <td className="user-data-title"><strong>Perfil criado em:</strong></td>
              <td>{data.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      );
}

export default UserData