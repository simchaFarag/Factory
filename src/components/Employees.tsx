import { useState } from 'react';
import { getAll } from './Utils';
import { useNavigate } from 'react-router-dom';

function Employees() {
  const navigate = useNavigate();
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [employees, setemployees] = useState([]);

  const getEmployees = async () => {
    try {
      const resp = await getAll(url);
      if (resp.status === 200) {
        const { data } = resp;
        setemployees(data);
      } else {
        console.log('error');
      }
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
      Employees
      <button onClick={getEmployees}>GetALL </button>
      <ul>
        {employees.map((e) => {
          return (
            <button
              key={e.id}
              onClick={() => {
                navigate('/EditEmployee');
              }}
            >
               {e.name} 
              
            </button>
          );
        })}
      </ul>
    </>
  );
}

export default Employees;
