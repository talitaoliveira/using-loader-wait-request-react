import React from 'react';
import './UserData.css';

const UserData = ({data}) => {
    return (
        <div className="user-data">
        <img src={data.avatar_url} alt={data.name}/>
        <table>
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td><strong>Localização:</strong></td>
              <td>{data.location}</td>
            </tr>
            <tr>
              <td><strong>Bio:</strong></td>
              <td>{data.bio}</td>
            </tr>
            <tr>
              <td><strong>Perfil criado em:</strong></td>
              <td>{data.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      );
}

export default UserData