import React from 'react';
import './UserData.css';

const UserData = (userData = {}) => {
    return (
        <div className="user-data">
        <img src={userData.avatar_url} alt={userData.name}/>
        <table>
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td><strong>Localização:</strong></td>
              <td>{userData.location}</td>
            </tr>
            <tr>
              <td><strong>Bio:</strong></td>
              <td>{userData.bio}</td>
            </tr>
            <tr>
              <td><strong>Perfil criado em:</strong></td>
              <td>{userData.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      );
}

export default UserData