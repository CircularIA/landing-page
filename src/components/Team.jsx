/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../style';
import { teamMember1, teamMember2, teamMember3, teamMember4, teamMember5, teamMember6 } from "../assets"

const linea = {
  width: '80%',
  height: '0.09rem',
  backgroundColor: '#00945E',
  margin: '0 auto',
  marginTop: '1rem',
}

const teamMembers = [
  { name: 'Ana Puyol', position: 'Ingeniería Civil Ambiental', photo: teamMember1 },
  { name: 'Adrián Ortiz', position: 'Investigador asociado', photo: teamMember2 },
  { name: 'Leonardo Guerra', position: 'Especialista en Economía Circular', photo: teamMember3 },
  { name: 'Catalina Pacheco', position: 'Diseñador Gráfico', photo: teamMember4 },
  { name: 'Juan Pablo Caniguante', position: 'Ingeniero Civil Informático', photo: teamMember5 },
  { name: 'Javier Tralma', position: 'Ingeniero Civil Informático', photo: teamMember6 },
];

const Team = () => {
  return (
    <div id="team-members" className={styles.aboutSection}>
      <div className="text-roboto">
        <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>Nuestro Equipo</h1>
      </div>
      <div style={linea}></div>
      <div className="team-members-container mt-10">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="member-photo" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Team;
