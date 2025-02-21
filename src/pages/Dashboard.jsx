import { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import './dashboard.css';
import axios from 'axios';
import '../../public/demandes.json'

function Dashboard() {

  const [demandes, setDemandes] = useState([])
  useEffect(() => {

    axios.get('../../public/demandes.json')
    .then(response => setDemandes(response.data.demandes))
    .catch(error => console.log('erreur', error));
  }, []);
  console.log(demandes)
  return (
    <>
          <Sidebar />
          <div className="table-container">

      <h1 className="table-title">Tableau des Absences</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Semaine 1</th>
            <th>Semaine 2</th>
            <th>Semaine 3</th>
            <th>Semaine 4</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
              {demandes.map((demande) => (
               <tr key={demande.id}>
                  <td>{demande.employeeName}</td>
                  <td style={{ backgroundColor: demande.weeks[0].status === "Refusé" ? "red" : "" }}>
                    {demande.weeks[0].status}
                  </td>
                  <td style={{ backgroundColor: demande.weeks[1].status === "Refusé" ? "red" : "" }}>
                    {demande.weeks[1].status}
                  </td>
                  <td style={{ backgroundColor: demande.weeks[2].status === "Refusé" ? "red" : "" }}>
                    {demande.weeks[2].status}
                  </td>
                  <td style={{ backgroundColor: demande.weeks[3].status === "Refusé" ? "red" : "" }}>
                    {demande.weeks[3].status}
                  </td>
                  <td>
                    <button className='button'>Accepter</button>
                    <button className='button'>Refuser</button>
                    <button className='button'>Modifier</button>
                  </td>

            </tr>
          ))}
            
        </tbody>
      </table>
    </div>
    </>
    
  );
}

export default Dashboard;